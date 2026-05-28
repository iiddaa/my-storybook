import './global-navigation.css';
import { createBrandLogo } from './BrandLogo';

// ─────────────────────────────────────────────────────────────
// アイコン（インライン SVG）
// Figma node-id: 8:1177 より。セマンティックカラー適用済み。
// Yellow/500=#FBBC04  Blue/500=#318BF7  Red/500=#EB4D38
// ─────────────────────────────────────────────────────────────
const SVG_ICONS = {
  // store_nav: Figma node-id 152:86（24×24）建物本体（Yellow/500）＋ 窓3つ（Blue/500）
  store: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(4,10)">
      <path d="M0 0V10C0 10.55 0.45 11 1 11H6.01V7C6.01 6.45 6.46 6 7.01 6H9.01C9.56 6 10.01 6.45 10.01 7V11H15C15.55 11 16 10.55 16 10V0H0Z" fill="#FBBC04"/>
    </g>
    <g transform="translate(3,3)">
      <path d="M1 0H6V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V1C0 0.45 0.45 0 1 0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(9,3)">
      <path d="M0 0H6V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(15,3)">
      <path d="M0 0H5C5.55 0 6 0.45 6 1V7C6 8.66 4.66 10 3 10C1.34 10 0 8.66 0 7V0Z" fill="#318BF7"/>
    </g>
  </svg>`,
  // analysis_nav: Figma node-id 152:91（24×24）棒グラフ 左(Blue/500)・中(Yellow/500)・右(Red/500)
  analysis: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(3,11)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V9.5C5 9.78 4.78 10 4.5 10H0.5C0.22 10 0 9.78 0 9.5V1C0 0.45 0.45 0 1 0Z" fill="#318BF7"/>
    </g>
    <g transform="translate(9.5,7)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V13.5C5 13.78 4.78 14 4.5 14H0.5C0.22 14 0 13.78 0 13.5V1C0 0.45 0.45 0 1 0Z" fill="#FBBC04"/>
    </g>
    <g transform="translate(16,3)">
      <path d="M1 0H4C4.55 0 5 0.45 5 1V17.5C5 17.78 4.78 18 4.5 18H0.5C0.22 18 0 17.78 0 17.5V1C0 0.45 0.45 0 1 0Z" fill="#EB4D38"/>
    </g>
  </svg>`,
  // gear_nav: Figma node-id 152:94（24×24、2pxパディング）ギア（Blue/500）
  gear: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(2,2)">
      <path d="M0.0219292 6.93C0.470734 5.59 1.23266 4.35 2.21376 3.3C2.38076 3.12 2.64169 3.06 2.87132 3.14L5.24059 3.95C5.8877 4.17 6.587 3.85 6.81662 3.24C6.84793 3.18 6.85837 3.11 6.86881 3.06L7.31761 0.7C7.35936 0.47 7.55767 0.28 7.79773 0.23C8.5179 0.08 9.25895 0 10 0C10.741 0 11.4821 0.08 12.1918 0.22C12.4319 0.27 12.6302 0.45 12.672 0.69L13.1208 3.05C13.246 3.69 13.8827 4.12 14.5611 4C14.6342 4 14.6968 3.97 14.749 3.95L17.1182 3.14C17.3583 3.06 17.6192 3.12 17.7758 3.3C18.7673 4.34 19.5188 5.58 19.9676 6.93C20.0511 7.16 19.9676 7.41 19.7798 7.56L17.8697 9.11C17.3479 9.53 17.2852 10.28 17.734 10.77C17.7758 10.82 17.8175 10.86 17.8697 10.9L19.7798 12.45C19.9676 12.61 20.0407 12.85 19.9676 13.08C19.5188 14.42 18.7569 15.66 17.7758 16.71C17.6088 16.89 17.3479 16.95 17.1182 16.87L14.749 16.06C14.1019 15.84 13.4026 16.16 13.1729 16.77C13.1416 16.83 13.1312 16.9 13.1208 16.95L12.672 19.31C12.6302 19.54 12.4319 19.73 12.1918 19.78C11.4821 19.92 10.741 20 10 20C9.25895 20 8.5179 19.92 7.80816 19.78C7.56811 19.73 7.3698 19.55 7.32805 19.31L6.87924 16.95C6.754 16.31 6.11732 15.88 5.43889 16C5.36583 16 5.30321 16.03 5.25102 16.05L2.88175 16.86C2.64169 16.94 2.38076 16.88 2.2242 16.7C1.23266 15.66 0.481171 14.42 0.0323665 13.07C-0.051132 12.84 0.0323663 12.59 0.220238 12.44L2.13027 10.89C2.65213 10.47 2.71476 9.72 2.26595 9.23C2.2242 9.18 2.18245 9.14 2.13027 9.1L0.220238 7.55C0.0323663 7.39 -0.0406947 7.15 0.0323665 6.92L0.0219292 6.93ZM10.0104 13.35C11.9309 13.35 13.4965 11.86 13.4965 10.01C13.4965 8.16 11.9413 6.67 10.0104 6.67C8.07953 6.67 6.52437 8.16 6.52437 10.01C6.52437 11.86 8.07953 13.35 10.0104 13.35Z" fill="#318BF7"/>
    </g>
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
  logoArea.appendChild(createBrandLogo({ variant: 'store-marketing' }));
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
