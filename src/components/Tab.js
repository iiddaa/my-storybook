import './tab.css';

/**
 * Tab コンポーネントを生成する。
 *
 * 一つの機能やテーマの中で、表示する情報をシームレスに切り替え、
 * 目的の情報に素早くアクセスするためのもの。
 *
 * @param {Object}   props
 * @param {string}   [props.variant='primary']   - 'primary'（アンダーライン型）| 'secondary'（背景塗り型）
 * @param {Array}    [props.tabs=[]]             - タブ定義の配列 { label, icon, disabled }
 * @param {number}   [props.activeIndex=0]       - 初期選択インデックス
 * @param {Function} [props.onChange=null]       - タブ切り替え時のコールバック (index) => void
 * @returns {HTMLElement}
 */
export const createTab = ({
  variant = 'primary',
  tabs = [],
  activeIndex = 0,
  onChange = null,
} = {}) => {
  let currentIndex = activeIndex;

  const root = document.createElement('div');
  root.className = `storybook-tab storybook-tab--${variant}`;
  root.setAttribute('role', 'tablist');

  tabs.forEach((tab, index) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.setAttribute('role', 'tab');
    item.setAttribute('aria-selected', String(index === currentIndex));

    const classes = ['storybook-tab__item'];
    if (index === currentIndex) classes.push('storybook-tab__item--selected');
    if (tab.disabled) classes.push('storybook-tab__item--disabled');
    item.className = classes.join(' ');

    if (tab.disabled) {
      item.disabled = true;
      item.setAttribute('aria-disabled', 'true');
    }

    if (tab.icon) {
      const iconEl = document.createElement('span');
      iconEl.className = 'storybook-tab__item-icon';
      iconEl.setAttribute('aria-hidden', 'true');
      iconEl.innerHTML = tab.icon;
      item.appendChild(iconEl);
    }

    const labelEl = document.createElement('span');
    labelEl.className = 'storybook-tab__item-label';
    labelEl.textContent = tab.label;
    item.appendChild(labelEl);

    if (!tab.disabled) {
      item.addEventListener('click', () => {
        if (index === currentIndex) return;

        const prev = root.querySelector('.storybook-tab__item--selected');
        if (prev) {
          prev.classList.remove('storybook-tab__item--selected');
          prev.setAttribute('aria-selected', 'false');
        }

        item.classList.add('storybook-tab__item--selected');
        item.setAttribute('aria-selected', 'true');
        currentIndex = index;

        if (typeof onChange === 'function') {
          onChange(index);
        }
      });
    }

    root.appendChild(item);
  });

  return root;
};
