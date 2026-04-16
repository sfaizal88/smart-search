/**
 * Type Definitions
 */
export type SearchItemType = 'account' | 'customer' | 'transaction';

export type SearchItem = {
  id: string;
  type: SearchItemType;
  label: string;
  subtitle?: string;
  meta?: string;
  disabled?: boolean;
  raw?: unknown;
};