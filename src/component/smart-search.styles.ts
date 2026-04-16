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
      font-family: Arial, sans-serif;
      font-size: 15px;
      color: var(--text-primary);
      background-color: var(--bg-page);
    }

    .search-container {
      position: relative;
      width: 100%;
      margin-top: 15px;
      display: block;
      box-sizing: border-box;
    }

    input {
      padding: 12px 24px 12px 44px;
      width: 100%;
      box-sizing: border-box;
      color: var(--text-primary);
      background-color: var(--bg-input);
      border: 1px solid var(--border);

      border-radius: 12px;
      transition: all 0.2s ease;
    }

    input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    input:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    .subtitle {
      font-size: 11px;
      color: var(--text-muted);
    }

    .dropdown-container {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1000;
      border: 1px solid var(--border);
      background: var(--bg-dropdown);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
      max-height: 220px;
      overflow-y: auto;
      border-radius: 10px;
    }

    .dropdown-container.bottom {
      top: calc(100% + 6px);
    }

    .dropdown-container.top {
      bottom: calc(100% + 6px);
    }

    .dropdown-item {
      padding: 10px 12px;
      cursor: pointer;
      color: var(--text-primary);
      transition: background 0.15s ease;
    }

    .dropdown-item:hover {
      background: var(--hover-bg);
    }

    .dropdown-item.active {
      background: var(--primary-active-bg);
    }

    .disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .error {
      color: var(--error);
      margin-top: 6px;
      font-size: 12px;
    }

    .clear-icon {
      cursor: pointer;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }

    .loader-icon {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
    }

    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      opacity: 0.6;
    }

    .muted-text {
      color: var(--text-muted);
    }

    .group-btns {
      display: flex;
      gap: 8px;
      margin-top: 10px;
      flex-wrap: wrap;
    }

    .primary-btn {
      padding: 6px 14px;
      border-radius: 999px;
      cursor: pointer;
      background: var(--bg-input);
      color: var(--text-primary);
      border: 1px solid var(--border);

      transition: all 0.2s ease;
    }

    .primary-btn:hover {
      background: var(--hover-bg);
    }

    .primary-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--text-secondary);
    }

    mark {
      background: var(--highlight);
      color: black;
      font-weight: bold;
      padding: 0 2px;
      border-radius: 2px;
    }

    @media (max-width: 640px) {
      input {
        font-size: 16px;
        min-height: 44px;
      }

      .primary-btn {
        padding: 8px 12px;
        min-height: 36px;
      }

      .group-btns {
        gap: 6px;
        flex-direction: column;
      }

      .dropdown-container {
        max-height: 260px;
      }
    }
  `
];