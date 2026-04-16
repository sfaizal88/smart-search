/**
 * Light Theme
 * CSS properties for light mode styling.
 */
import { css } from 'lit';

export const lightTheme = css`
  :host([theme="light"]) {
    /* TEXT */
    --text-primary: #111827;
    --text-secondary: #ffffff;
    --text-muted: #6b7280;

    /* BACKGROUND */
    --bg-page: #ffffff;
    --bg-input: #ffffff;
    --bg-dropdown: #ffffff;

    /* BORDER */
    --border: #e5e7eb;

    /* BRAND */
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --primary-active-bg: #e0ecff;

    /* STATES */
    --hover-bg: #f3f4f6;
    --error: #dc2626;

    /* HIGHLIGHT */
    --highlight: #fde047;
  }
`;