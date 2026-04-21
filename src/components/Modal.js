import './modal.css';

const CLOSE_ICON = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

/**
 * Modalコンポーネントを生成する。
 *
 * 背後の操作を不可能にして、特定のモードに集中させるUIの「土台」。
 * コンテンツは children に委ねるため、Confirm・Task いずれの用途にも対応できる。
 *
 * @param {Object}        props
 * @param {string}        [props.title='タイトル']        - ヘッダーに表示するタイトル
 * @param {'S'|'M'|'L'}  [props.size='M']               - パネルの幅（S:500px / M:700px / L:900px）
 * @param {string|Node}  [props.children]               - コンテンツスロット
 * @param {string}        [props.subText='']             - フッター左側に表示するサブテキスト
 * @param {string}        [props.cancelLabel='キャンセル'] - キャンセルボタンのラベル
 * @param {string}        [props.confirmLabel='決定']     - 確定ボタンのラベル
 * @param {Function}      [props.onClose]                - 閉じるボタンのコールバック
 * @param {Function}      [props.onCancel]               - キャンセルボタンのコールバック（未指定時は onClose を使用）
 * @param {Function}      [props.onConfirm]              - 確定ボタンのコールバック
 * @returns {HTMLElement}
 */
export const createModal = ({
  title = 'タイトル',
  size = 'M',
  children,
  subText = '',
  cancelLabel = 'キャンセル',
  confirmLabel = '決定',
  onClose,
  onCancel,
  onConfirm,
}) => {
  // --- Overlay ---
  const overlay = document.createElement('div');
  overlay.className = 'storybook-modal-overlay';

  // --- Panel ---
  const panel = document.createElement('div');
  panel.className = `storybook-modal-panel storybook-modal-panel--${size}`;

  // --- Header ---
  const header = document.createElement('div');
  header.className = 'storybook-modal-header';

  const titleEl = document.createElement('p');
  titleEl.className = 'storybook-modal-title';
  titleEl.innerText = title;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'storybook-modal-close';
  closeBtn.setAttribute('aria-label', '閉じる');
  closeBtn.innerHTML = CLOSE_ICON;
  closeBtn.addEventListener('click', onClose);

  header.appendChild(titleEl);
  header.appendChild(closeBtn);

  // --- Content ---
  const content = document.createElement('div');
  content.className = 'storybook-modal-content';

  if (typeof children === 'string') {
    content.innerText = children;
  } else if (children instanceof Node) {
    content.appendChild(children);
  }

  // --- Footer ---
  const footer = document.createElement('div');
  footer.className = 'storybook-modal-footer';

  const actions = document.createElement('div');
  actions.className = 'storybook-modal-actions';

  if (subText) {
    const subEl = document.createElement('p');
    subEl.className = 'storybook-modal-subtext';
    subEl.innerText = subText;
    actions.appendChild(subEl);
  }

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'storybook-modal-btn storybook-modal-btn--cancel';
  cancelBtn.innerText = cancelLabel;
  cancelBtn.addEventListener('click', onCancel || onClose);

  const confirmBtn = document.createElement('button');
  confirmBtn.type = 'button';
  confirmBtn.className = 'storybook-modal-btn storybook-modal-btn--confirm';
  confirmBtn.innerText = confirmLabel;
  confirmBtn.addEventListener('click', onConfirm);

  actions.appendChild(cancelBtn);
  actions.appendChild(confirmBtn);
  footer.appendChild(actions);

  panel.appendChild(header);
  panel.appendChild(content);
  panel.appendChild(footer);
  overlay.appendChild(panel);

  return overlay;
};
