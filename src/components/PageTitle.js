import './page-title.css';
import { createBreadcrumbs } from './Breadcrumbs';

/**
 * ページの「現在表示しているものが何か」を把握しやすくするコンポーネント。
 *
 * Figmaガイドライン:
 * - 下層ページに進んだら、タイトル上部にBreadcrumbsを配置する。
 * - 必要な場合にのみ、説明文を付与する。基本はいらない。
 *
 * @param {Object}   props
 * @param {string}   props.title                   - ページタイトル（必須）
 * @param {string}   [props.description]           - 説明文（任意）
 * @param {Object}   [props.breadcrumbs]           - Breadcrumbs設定（任意）
 * @param {Array}    [props.breadcrumbs.items]     - 親階層のアイテム配列
 * @param {string}   [props.breadcrumbs.current]   - 現在地のテキスト
 * @returns {HTMLElement}
 */
export const createPageTitle = ({ title, description, breadcrumbs }) => {
  const header = document.createElement('div');
  header.className = 'storybook-page-title';
  header.setAttribute('aria-label', 'ページタイトル');

  if (breadcrumbs) {
    const bc = createBreadcrumbs({
      items: breadcrumbs.items ?? [],
      current: breadcrumbs.current ?? '',
    });
    header.appendChild(bc);
  }

  const titleEl = document.createElement('h1');
  titleEl.className = 'storybook-page-title__title';
  titleEl.textContent = title;
  header.appendChild(titleEl);

  if (description) {
    const descEl = document.createElement('p');
    descEl.className = 'storybook-page-title__description';
    descEl.textContent = description;
    header.appendChild(descEl);
  }

  return header;
};
