/**
 * Smart Search Component
 */

import { LitElement, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';

import type { SearchItem, SearchItemType } from '../utils/types';
import { highlightText, scrollToActiveItem } from './smart-search.utils';
import { filterItems, fetchItems } from './smart-search.service';

import { smartSearchStyles } from './smart-search.styles';

import clearImage from '../assets/clear.png';
import loader from '../assets/loader.gif';
import searchImage from '../assets/search.png';

@customElement('smart-search')
export class SmartSearch extends LitElement {

  /* createRenderRoot() {
    return this; // no shadow DOM
    return this.attachShadow({ mode: 'closed' });
  } */

  /** Internal state */
  @state() private query: string = '';
  @state() private isOpen: boolean = false;
  @state() private activeIndex: number = -1;
  @state() private selectedFilter: 'all' | SearchItemType = 'all';
  @state() private loading = false;
  @state() private dropdownPosition: 'bottom' | 'top' = 'bottom';
  @state() private debouncedQuery = '';
  @state() private error = '';
  private debounceTimer?: number;

  /** Public properties */
  @property({ type: Array }) items: SearchItem[] = [];
  @property({ type: String }) placeholder = 'Search...';
  @property({ type: String }) noResultsText = 'No results found';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Number }) debounceTime = 500;
  @property({ type: String }) value = '';
  @property({ type: Boolean }) enableHighlight = false;
  @property(({ reflect: true })) theme: 'light' | 'dark' = 'light';

  /* Styles for the component */
  static styles = smartSearchStyles;

  /** Updates component when value property changes */
  updated(changedProps: Map<string, any>) {
    if (changedProps.has('value')) {
      this.query = this.value;
      this.debouncedQuery = this.value;
    }
  }

  /** Adjusts dropdown position */
  private updateDropdownPosition() {
    const input = this.renderRoot.querySelector('input') as HTMLInputElement;
    if (!input) return;

    const rect = input.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < 220 && spaceAbove > spaceBelow) {
      this.dropdownPosition = 'top';
    } else {
      this.dropdownPosition = 'bottom';
    }
  }

  /** Handles window resize and scroll to update dropdown position */
  private handleWindowChange = () => {
    if (this.isOpen) {
      this.updateDropdownPosition();
    }
  };

  /** Handles input changes with debouncing and fetches filtered results */
  private handleInput(e: Event) {
    if (this.disabled) return;
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    this.query = target.value;
    this.isOpen = this.query.length > 0;
    this.activeIndex = 0;
    this.error = '';

    clearTimeout(this.debounceTimer);

    this.debounceTimer = window.setTimeout(async () => {
      this.debouncedQuery = this.query;

      if (!this.debouncedQuery) {
        this.items = [];
        this.loading = false;
        this.error = '';
        return;
      }

      try {
        this.loading = true;
        this.error = '';

        const results = await fetchItems(this.debouncedQuery);

        this.items = results;
        this.loading = false;
        this.activeIndex = 0;
        this.updateDropdownPosition();
      } catch (err) {
        this.loading = false;
        this.items = [];
        this.error = 'Something went wrong. Please try again.';
      }
    }, this.debounceTime);

    this.dispatchEvent(new CustomEvent('search-change', {
      detail: { query: this.query, value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  /** Clear event */
  private clearInput() {
    this.query = '';
    this.debouncedQuery = '';
    this.items = [];
    this.isOpen = false;
    this.activeIndex = -1;
    this.loading = false;
    this.error = '';
    this.value = '';
  }

  /** Selects an item and emits result event */
  private selectItem(item: SearchItem) {
    if (item.disabled) return;
    this.query = item.label;  // fill input
    this.value = item.label;
    this.debouncedQuery = item.label;
    this.isOpen = false;      // close dropdown
    this.activeIndex = -1;

    this.dispatchEvent(new CustomEvent('result-select', {
      detail: item,
      bubbles: true,
      composed: true
    }));
  }

  /** Returns items filtered by query and selected filter type */
  private getFilteredItems() {
    return filterItems(this.items, this.query, this.selectedFilter);
  }

  /** Handles keyboard navigation (arrow keys, enter, escape) */
  private handleKeyDown(e: KeyboardEvent) {
    const filtered = this.getFilteredItems();

    switch (e.key) {

      case 'ArrowDown':
        e.preventDefault(); // prevent cursor move

        if (filtered.length > 0) {
          this.activeIndex = (this.activeIndex + 1) % filtered.length;
          scrollToActiveItem(this.activeIndex, this.renderRoot);
        }
        break;

      case 'ArrowUp':
        e.preventDefault();

        if (filtered.length > 0) {
          this.activeIndex =
            this.activeIndex <= 0
              ? filtered.length - 1
              : this.activeIndex - 1;
          scrollToActiveItem(this.activeIndex, this.renderRoot);
        }
        break;

      case 'Enter':
        if (filtered[this.activeIndex]) {
          this.selectItem(filtered[this.activeIndex]);
        }
        break;

      case 'Escape':
        this.isOpen = false;
        break;
    }
  }

  /** Updates active filter and emits filter change event */
  private setFilter(filter: 'all' | SearchItemType) {
    this.selectedFilter = filter;
    this.activeIndex = 0;

    // Emit filter event
    this.dispatchEvent(new CustomEvent('filter-change', {
      detail: { filter },
      bubbles: true,
      composed: true
    }));
  }

  /** Renders a filter button */
  private renderFilterButton(value: 'all' | SearchItemType, label: string) {
    return html`
      <button
        class="primary-btn ${this.selectedFilter === value && 'active'}"
        @click=${() => this.setFilter(value)}
      >
        ${label}
      </button>
    `;
  }

  /** Closes dropdown when clicking outside the component */
  private handleOutsideClick = (e: MouseEvent) => {
    const path = e.composedPath();
    if (!path.includes(this)) {
      this.isOpen = false;
    }
  };

  /** Attaches event listeners when component is added to DOM */
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleWindowChange);
    window.addEventListener('scroll', this.handleWindowChange, true);
    document.addEventListener('click', this.handleOutsideClick);
  }

  /** Removes event listeners when component is removed from DOM */
  disconnectedCallback() {
    window.removeEventListener('resize', this.handleWindowChange);
    window.removeEventListener('scroll', this.handleWindowChange, true);
    document.removeEventListener('click', this.handleOutsideClick);
    super.disconnectedCallback();
  }

  /** Renders the component template */
  render() {
    const filtered = this.getFilteredItems();
    return html`
      <div class="search-container">
        <input
          type="text"
          placeholder=${this.placeholder}
          .value=${this.query}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
          role="combobox"
          aria-label="Search"
          aria-expanded=${this.isOpen}  
          aria-haspopup="listbox"
          aria-controls="search-list"
          ?disabled=${this.disabled}
          aria-autocomplete="list"
          aria-disabled=${this.disabled}
        />
        <img class="search" src=${searchImage} alt="search"/>
        <img class="clear-icon" src=${clearImage} alt="clear" @click=${this.clearInput} ?hidden=${!this.query || this.loading}/>
        <img class="loader" src=${loader} alt="loading" ?hidden=${!this.loading}/>
        
        ${this.isOpen && !this.loading ? html`
          <div class="dropdown ${this.dropdownPosition}" role="listbox" id="search-list">
            ${filtered.length !== 0 ? filtered.map((item, index) => html`
              <div
                class="item ${index === this.activeIndex ? 'active' : ''} ${item.disabled ? 'item-disabled' : ''}"
                role="option"
                id="item-${index}"
                aria-selected=${index === this.activeIndex}
                @click=${() => this.selectItem(item)}
                aria-disabled=${item.disabled}
              >
                ${highlightText(item.label, this.debouncedQuery, this.enableHighlight)}
                ${item.subtitle ? html`<div class="subtitle">
                  ${highlightText(item.subtitle, this.debouncedQuery, this.enableHighlight)}
                </div>` : ''}
              </div>
            `) : html`<div class="item no-result" role="option">${this.noResultsText}</div>`}
          </div>
        ` : ''}
        </div>
        <div class="group-btns">
          ${this.renderFilterButton('all', 'All')}
          ${this.renderFilterButton('account', 'Accounts')}
          ${this.renderFilterButton('customer', 'Customers')}
          ${this.renderFilterButton('transaction', 'Transactions')}
        </div>
        <div class="error" hidden=${!this.error}> ${this.error}</div>
    `;
  }
}