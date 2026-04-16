/**
 * Smart Search Utilities Module
 * Provides helper functions.
 */
import { html } from 'lit';

/**
 * Highlights matching text by wrapping it with a <mark> tag
 * @param text - Original text to highlight
 * @param query - Search query to match
 * @param enable - Whether highlighting is enabled
 * @returns Highlighted text
 */
export function highlightText(
  text: string,
  query: string,
  enable: boolean
) {
  if (!text) return '';
  if (!enable || !query) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return parts.map(part =>
    part.toLowerCase() === query.toLowerCase()
      ? html`<mark>${part}</mark>`
      : part
  );
}

/**
 * Scrolls the active item into view within the dropdown
 * @param activeIndex - Currently active item index
 * @param root - DOM element
 */
export function scrollToActiveItem(
  activeIndex: number, 
  root: HTMLElement | DocumentFragment
) {
    const items = root.querySelectorAll('.item');
    const active = items[activeIndex] as HTMLElement;

    if (active && typeof active.scrollIntoView === 'function') {
      active.scrollIntoView({ block: 'nearest' });
    }
  }