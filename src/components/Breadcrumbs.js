import './breadcrumbs.css';

/**
 * パンくずリストを生成する。
 *
 * 階層構造の現在地を示し、上の階層へ簡単に移動できるコンポーネント。
 *
 * Figmaガイドライン:
 * - 画面名は簡潔に、長くしすぎないこと
 *
 * @param {Object}     props
 * @param {Array}      props.items               - 親階層のアイテム配列
 * @param {string}     props.items[].label       - 表示テキスト
 * @param {string}     [props.items[].href]      - リンク先URL
 * @param {Function}   [props.items[].onClick]   - クリック時コールバック（任意）
 * @param {string}     props.current             - 現在地のテキスト
 * @returns {HTMLElement}
 */
export const createBreadcrumbs = ({ items = [], current }) => {
  const nav = document.createElement('nav');
  nav.className = 'storybook-breadcrumbs';
  nav.setAttribute('aria-label', 'パンくずリスト');

  const list = document.createElement('ol');
  list.className = 'storybook-breadcrumbs-list';

  items.forEach(({ label, href, onClick }) => {
    const li = document.createElement('li');
    li.className = 'storybook-breadcrumbs-item';

    const link = document.createElement('a');
    link.className = 'storybook-breadcrumbs-link';
    link.href = href || '#';
    link.innerText = label;
    if (onClick) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        onClick(e);
      });
    }

    li.appendChild(link);
    li.appendChild(createSeparator());
    list.appendChild(li);
  });

  const currentLi = document.createElement('li');
  currentLi.className = 'storybook-breadcrumbs-item';

  const currentSpan = document.createElement('span');
  currentSpan.className = 'storybook-breadcrumbs-current';
  currentSpan.setAttribute('aria-current', 'page');
  currentSpan.innerText = current;

  currentLi.appendChild(currentSpan);
  list.appendChild(currentLi);

  nav.appendChild(list);
  return nav;
};

function createSeparator() {
  const sep = document.createElement('span');
  sep.className = 'storybook-breadcrumbs-separator';
  sep.setAttribute('aria-hidden', 'true');
  sep.innerHTML = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 1.5L5.5 4L2.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  return sep;
}
