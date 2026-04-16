/**
 * Mock Data
 */
import type { SearchItem } from '../utils/types';

const accountItems: SearchItem[] = [
  { id: "A1001", label: "Savings Account - 1234", type: "account", subtitle: "SGD Active" },
  { id: "A1002", label: "Current Account - 5678", type: "account", subtitle: "SGD Active" },
  { id: "A1003", label: "Business Account - 9012", type: "account", subtitle: "USD Active" },
  { id: "A1004", label: "Fixed Deposit - 3456", type: "account", subtitle: "SGD Maturing Soon" },
  { id: "A1005", label: "Joint Account - 7890", type: "account", subtitle: "SGD Active" }
];

const customerItems: SearchItem[] = [
  { id: "C2001", label: "John Tan", type: "customer", subtitle: "Retail Customer Singapore" },
  { id: "C2002", label: "Priya Nair", type: "customer", subtitle: "Retail Customer Singapore" },
  { id: "C2003", label: "David Lee", type: "customer", subtitle: "Wealth Client Hong Kong" },
  { id: "C2004", label: "Sarah Lim", type: "customer", subtitle: "Retail Customer Singapore" },
  { id: "C2005", label: "Michael Wong", type: "customer", subtitle: "Corporate Client Malaysia" }
];

export const transactionItems: SearchItem[] = [
  { id: "T3001", label: "Transfer to DBS Bank", type: "transaction", subtitle: "SGD 1,200 12 Mar 2026" },
  { id: "T3002", label: "Salary Credit", type: "transaction", subtitle: "SGD 5,000 01 Mar 2026" },
  { id: "T3003", label: "POS Purchase - NTUC", type: "transaction", subtitle: "SGD 45.60 10 Mar 2026" },
  { id: "T3004", label: "Online Payment - SP Group", type: "transaction", subtitle: "SGD 120 08 Mar 2026" },
  { id: "T3005", label: "ATM Withdrawal", type: "transaction", subtitle: "SGD 300 05 Mar 2026" }
];

export const mockItems: SearchItem[] = [
  ...accountItems,
  ...customerItems,
  ...transactionItems
];