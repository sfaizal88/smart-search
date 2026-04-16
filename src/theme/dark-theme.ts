/**
 * Dark Theme
 * CSS properties for dark mode styling.
 */

import { css } from 'lit';

export const darkTheme = css`
  :host([theme="dark"]) {
    /* TEXT */
    --text-primary: #f9fafb;
    --text-secondary: #111827;
    --text-muted: #9ca3af;

    /* BACKGROUND */
    --bg-page: #0f172a;
    --bg-input: #111827;
    --bg-dropdown: #1f2933;

    /* BORDER */
    --border: #374151;

    /* BRAND */
    --primary: #3b82f6;
    --primary-hover: #2563eb;
    --primary-active-bg: #1e3a8a;

    /* STATES */
    --hover-bg: #374151;
    --error: #ef4444;

    /* HIGHLIGHT */
    --highlight: #facc15;
  }
`;