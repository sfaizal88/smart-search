/**
 * Light Theme
 * CSS properties for light mode styling.
 */
import { css } from 'lit';

export const lightTheme = css`
  :host([theme="light"]) {
    --input-bg: white;
    --text-color: black;
    --border-color: #ccc;
    --dropdown-bg: white;
    --hover-bg: #f5f5f5;
    --active-bg: #dbeafe;
    --muted-text: gray;
    --error-color: red;
    --btn-bg: white;
    --highlight-bg: yellow;
  }
`;