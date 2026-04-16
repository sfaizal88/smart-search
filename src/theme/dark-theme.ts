/**
 * Dark Theme
 * CSS properties for dark mode styling.
 */

import { css } from 'lit';

export const darkTheme = css`
  :host([theme="dark"]) {
    --input-bg: #1f2937;
    --text-color: #f9fafb;
    --border-color: #374151;
    --dropdown-bg: #111827;
    --hover-bg: #374151;
    --active-bg: #2563eb;
    --muted-text: #9ca3af;
    --error-color: #f87171;
    --btn-bg: #1f2937;
    --highlight-bg: #facc15;
  }
`;