/**
 * Smart Search Service Module
 * Provides core functionality for filtering and fetching search items.
 */
import type { SearchItem, SearchItemType } from '../utils/types';
import { mockItems as data } from '../data/mockData';

/**
 * Filters items based on search query and selected type filter
 * @param items - Array of items to filter
 * @param query - Search query
 * @param selectedFilter - Filter type
 * @returns Filter items matching the query and filter
 */
export function filterItems(
  items: SearchItem[],
  query: string,
  selectedFilter: 'all' | SearchItemType
) {
  if (!Array.isArray(items)) return [];

  return (items ?? []).filter(item => {
    const matchText = item.label.toLowerCase().includes(query.toLowerCase());

    const matchFilter =
      selectedFilter === 'all' ||
      item.type === selectedFilter;

    return matchText && matchFilter;
  });
}

/**
 * Simulates fetching items from an API based on search query
 * @param query - Search query
 * @returns Filter items matching the query
 */
export async function fetchItems(query: string) {
  await new Promise(res => setTimeout(res, 500));

  return data.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );
}