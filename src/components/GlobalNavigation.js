import './global-navigation.css';

// ─────────────────────────────────────────────────────────────
// アイコン（インライン SVG）
// ─────────────────────────────────────────────────────────────
const SVG_ICONS = {
  store: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 9L5 5h10l2 4H3z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
    <rect x="3" y="9" width="14" height="7" rx="0.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
    <rect x="8" y="11.5" width="4" height="4.5" stroke="currentColor" stroke-width="1.2"/>
    <rect x="4.5" y="10.5" width="2.5" height="2" stroke="currentColor" stroke-width="1.2"/>
    <rect x="13" y="10.5" width="2.5" height="2" stroke="currentColor" stroke-width="1.2"/>
  </svg>`,
  analysis: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.5" y="12" width="3.5" height="5" rx="0.5" fill="currentColor"/>
    <rect x="8.25" y="8" width="3.5" height="9" rx="0.5" fill="currentColor"/>
    <rect x="14" y="4.5" width="3.5" height="12.5" rx="0.5" fill="currentColor"/>
  </svg>`,
  gear: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.2"/>
    <path d="M16.5 10c0-.3 0-.7-.1-1l1-.8c.2-.2.3-.6.1-.9l-1-1.7c-.2-.3-.5-.4-.8-.3l-1.2.5c-.5-.4-1-.7-1.6-.9L12.7 3.6c-.1-.3-.4-.5-.7-.5H9.9c-.3 0-.6.2-.7.5L9 4.9c-.6.2-1.1.5-1.6.9L6.2 5.3c-.3-.1-.6 0-.8.3l-1 1.7c-.2.3-.1.7.1.9l1 .8c0 .3-.1.7-.1 1s0 .7.1 1l-1 .8c-.2.2-.3.6-.1.9l1 1.7c.2.3.5.4.8.3l1.2-.5c.5.4 1 .7 1.6.9l.2 1.3c.1.3.4.5.7.5h2.1c.3 0 .6-.2.7-.5l.2-1.3c.6-.2 1.1-.5 1.6-.9l1.2.5c.3.1.6 0 .8-.3l1-1.7c.2-.3.1-.7-.1-.9l-1-.8c.1-.3.1-.7.1-1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
  </svg>`,
};

/**
 * グローバルナビゲーション
 *
 * Figmaガイドライン（Design-System-2.0--AI-Native- / Global Navigation）:
 * - 主要機能を切り替えるもの。
 * - いつでもすぐにアクセスできるよう、位置は固定で常に表示する。
 * - 項目数はできるだけ絞る。あくまで主要機能群。
 * - 現在地がわかるようにする。（なんのサービスの、どの主要機能を操作しているのか）
 *
 * @param {Object}   props
 * @param {Object}   [props.logo]                        - ロゴ設定（省略時はテキストフォールバック）
 * @param {string}   [props.logo.src]                   - ロゴ画像URL
 * @param {string}   [props.logo.alt]                   - ロゴのalt（フォールバックテキストにも使用）
 * @param {Array}    props.sections                     - ナビセクション配列
 * @param {string}   props.sections[].label             - セクション見出し
 * @param {string}   props.sections[].icon              - アイコン種別: 'store' | 'analysis' | 'gear'
 * @param {Array}    props.sections[].items             - ナビアイテム配列
 * @param {string}   props.sections[].items[].id        - アイテムID（activeItemId との照合に使用）
 * @param {string}   props.sections[].items[].label     - 表示テキスト
 * @param {string}   [props.sections[].items[].href]    - リンク先URL
 * @param {Function} [props.sections[].items[].onClick] - クリックコールバック
 * @param {string}   [props.sections[].items[].badge]   - バッジテキスト（例: '99+', '7'）
 * @param {Array}    [props.options]                    - 下部オプション項目（ヘルプ・ログアウトなど）
 * @param {string}   props.options[].label             - 表示テキスト
 * @param {string}   [props.options[].href]            - リンク先URL
 * @param {Function} [props.options[].onClick]         - クリックコールバック
 * @param {string}   [props.activeItemId]              - アクティブ表示するアイテムのid
 * @returns {HTMLElement}
 */
export const createGlobalNavigation = ({
  logo,
  sections = [],
  options = [],
  activeItemId,
}) => {
  const root = document.createElement('nav');
  root.className = 'storybook-global-nav';
  root.setAttribute('aria-label', 'グローバルナビゲーション');

  // ── Nav Container ──
  const navContainer = document.createElement('div');
  navContainer.className = 'storybook-global-nav__nav-container';

  // Logo
  const logoArea = document.createElement('div');
  logoArea.className = 'storybook-global-nav__logo-area';
  if (logo?.src) {
    const img = document.createElement('img');
    img.className = 'storybook-global-nav__logo';
    img.src = logo.src;
    img.alt = logo.alt ?? '';
    logoArea.appendChild(img);
  } else {
    const fallback = document.createElement('div');
    fallback.className = 'storybook-global-nav__logo-fallback';
    fallback.textContent = logo?.alt ?? 'カンリー';
    logoArea.appendChild(fallback);
  }
  navContainer.appendChild(logoArea);

  // Sections
  sections.forEach((section) => {
    navContainer.appendChild(createSection(section, activeItemId));
  });

  root.appendChild(navContainer);

  // ── Options Container ──
  if (options.length > 0) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'storybook-global-nav__options-container';

    const optionsList = document.createElement('div');
    optionsList.className = 'storybook-global-nav__options-list';
    options.forEach((opt) => {
      optionsList.appendChild(createNavItem({ ...opt, active: false }));
    });
    optionsContainer.appendChild(optionsList);
    root.appendChild(optionsContainer);
  }

  return root;
};

function createSection({ label, icon, items = [] }, activeItemId) {
  const section = document.createElement('div');
  section.className = 'storybook-global-nav__section';

  // Section head
  const head = document.createElement('div');
  head.className = 'storybook-global-nav__section-head';

  const iconEl = document.createElement('span');
  iconEl.className = 'storybook-global-nav__section-icon';
  iconEl.innerHTML = SVG_ICONS[icon] ?? '';

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-global-nav__section-label';
  labelEl.textContent = label;

  head.appendChild(iconEl);
  head.appendChild(labelEl);
  section.appendChild(head);

  // Section list
  const list = document.createElement('div');
  list.className = 'storybook-global-nav__section-list';
  items.forEach((item) => {
    list.appendChild(createNavItem({ ...item, active: item.id === activeItemId }));
  });
  section.appendChild(list);

  return section;
}

function createNavItem({ label, href, onClick, badge, active }) {
  const item = document.createElement('a');
  item.className =
    'storybook-global-nav__item' +
    (active ? ' storybook-global-nav__item--active' : '');
  item.href = href ?? '#';
  if (active) item.setAttribute('aria-current', 'page');

  if (onClick) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      onClick(e);
    });
  }

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-global-nav__item-label';
  labelEl.textContent = label;
  item.appendChild(labelEl);

  if (badge) {
    const badgeEl = document.createElement('span');
    badgeEl.className = 'storybook-global-nav__badge';
    badgeEl.textContent = badge;
    item.appendChild(badgeEl);
  }

  return item;
}
