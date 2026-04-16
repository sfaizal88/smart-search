import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import axe from 'axe-core';
import { mockItems } from '../../data/mockData';
import '../smart-search';

describe('Accessibility test', () => {
  it('should have no accessibility violations', async () => {
    document.title = 'Smart search';
    document.documentElement.lang = 'en';
    document.body.innerHTML = `<smart-search></smart-search>`;
    const results = await axe.run(document);
    expect(results.violations.length).toBe(0);
  });
});

describe('SmartSearch Component', () => {

  let element: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `<smart-search></smart-search>`;
    element = document.querySelector('smart-search')!;

    (element as any).items = mockItems;
  });

  it('should render input field', () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input');
    expect(input).toBeTruthy();
  });

  it('should update input value on typing', () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'john';
    fireEvent.input(input);

    expect((element as any).query).toBe('john');
  });

  it('should filter results based on input', async () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'account';
    fireEvent.input(input);

    await new Promise(r => setTimeout(r, 400));

    const items = element.shadowRoot!.querySelectorAll('.smart-search__item');

    expect(items.length).toBeGreaterThan(0);
  });

  it('should select item on click', async () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'john';
    fireEvent.input(input);

    await new Promise(r => setTimeout(r, 400));

    const item = element.shadowRoot!.querySelector('.smart-search__item') as HTMLElement;

    fireEvent.click(item);

    expect((element as any).query).toBe('John Tan');
  });

  it('should emit search-change event', () => {
    const handler = vi.fn();
    element.addEventListener('search-change', handler);

    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'transfer';
    fireEvent.input(input);

    expect(handler).toHaveBeenCalled();
  });

  it('should emit result-select event', async () => {
    const handler = vi.fn();
    element.addEventListener('result-select', handler);

    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'savings';
    fireEvent.input(input);

    await new Promise(r => setTimeout(r, 400));

    const item = element.shadowRoot!.querySelector('.smart-search__item') as HTMLElement;

    fireEvent.click(item);

    expect(handler).toHaveBeenCalled();
  });

  it('should navigate using arrow keys', async () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'a';
    fireEvent.input(input);

    await new Promise(r => setTimeout(r, 400));

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });

    expect((element as any).activeIndex).toBeGreaterThanOrEqual(0);
  });

  it('should show no results message', async () => {
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    input.value = 'xyzabc';
    fireEvent.input(input);

    await new Promise(r => setTimeout(r, 400));

    const noResult = element.shadowRoot!.querySelector('.smart-search__item--empty');

    expect(noResult).toBeTruthy();
  });

  it('should disable input when disabled', async () => {
    (element as any).disabled = true;
    await (element as any).updateComplete;
    const input = element.shadowRoot!.querySelector('.smart-search__input') as HTMLInputElement;

    expect(input.disabled).toBe(true);
  });

});