/**
 * Smart Search Styles Module
 */
import { css } from 'lit';
import { lightTheme } from '../theme/light-theme';
import { darkTheme } from '../theme/dark-theme';

export const smartSearchStyles = [
  lightTheme,
  darkTheme,
  css`

  :host {
    display: block;
    font-family: Arial, sans-serif;
    color: var(--text-color);
  }

  .search-container {
    position: relative;
    width: 100%;
  }

  input {
    padding: 12px 24px 12px 40px;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    background: var(--input-bg);
    color: var(--text-color);   
    border: 1px solid var(--border-color);
    border-radius: 4px;
  }

  input:disabled {
    background: #f6f6f6;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #f6f6f6;
  }

  input:disabled::placeholder {
    color: #9ca3af;
  }

  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    border: 1px solid var(--border-color);
    background: var(--dropdown-bg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    max-height: 200px;
    overflow-y: auto; 
  }

  .subtitle {
    font-size: 10px;
    color: var(--muted-text);
  }

  .dropdown.bottom {
    top: calc(100% + 4px);
  }

  .dropdown.top {
    bottom: calc(100% + 4px);
  }

  .item {
    padding: 8px;
    cursor: pointer;
    color: var(--text-color);
  }

  .item-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .error {
    color: var(--error-color);
    margin-top: 6px;
    font-size: 12px;
  }

  .item:hover {
    background: var(--hover-bg);
  }

  .item.active {
    background: var(--active-bg);
  }

  .clear-icon {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }

  .loader {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  .search {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  .no-result {
    color: var(--muted-text);
  }

  .group-btns {
    display: flex;
    gap: 6px;
    margin-top: 6px;
    flex-wrap: wrap;
  }

  .primary-btn {
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    background: var(--btn-bg);
    color: var(--text-color);
    border-radius: 4px;
  }

  .primary-btn.active {
    background: var(--active-bg);
  }

  mark {
    background: var(--highlight-bg);
    color: black;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    input {
      font-size: 16px;
      min-height: 44px;
    }
    
    .primary-btn{ 
      padding: 8px 12px;
      min-height: 36px;
    }

    .group-btns {
      gap: 4px;
      flex-direction: column;
    }

    .dropdown {
      max-height: 240px;
    }
  }
`];