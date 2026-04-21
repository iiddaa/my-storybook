import './dialog.css';

/**
 * Dialogコンポーネントを生成する。
 *
 * ユーザーの操作を中断させて、その場で簡潔な意思決定を行わせるコンポーネント。
 * Modal とは異なり、幅は 500px 固定・閉じるボタン（×）を持たない。
 * ユーザーは必ずいずれかのボタンを選択することになる。
 *
 * @param {Object}       props
 * @param {string}       [props.title='タイトル']        - 見出し
 * @param {string}       [props.description='']         - 説明文
 * @param {string|Node}  [props.supplement]             - 補足エリア（グレー背景）。任意
 * @param {string}       [props.cancelLabel='キャンセル'] - キャンセルボタンのラベル
 * @param {string}       [props.confirmLabel='決定']     - 確定ボタンのラベル
 * @param {Function}     [props.onCancel]               - キャンセルボタンのコールバック
 * @param {Function}     [props.onConfirm]              - 確定ボタンのコールバック
 * @returns {HTMLElement}
 */
export const createDialog = ({
  title = 'タイトル',
  description = '',
  supplement,
  cancelLabel = 'キャンセル',
  confirmLabel = '決定',
  onCancel,
  onConfirm,
}) => {
  // --- Panel ---
  const dialog = document.createElement('div');
  dialog.className = 'storybook-dialog';

  // --- Body ---
  const body = document.createElement('div');
  body.className = 'storybook-dialog-body';

  const titleEl = document.createElement('p');
  titleEl.className = 'storybook-dialog-title';
  titleEl.innerText = title;
  body.appendChild(titleEl);

  if (description) {
    const descEl = document.createElement('p');
    descEl.className = 'storybook-dialog-description';
    descEl.innerText = description;
    body.appendChild(descEl);
  }

  if (supplement !== undefined && supplement !== null && supplement !== '') {
    const suppEl = document.createElement('div');
    suppEl.className = 'storybook-dialog-supplement';
    if (typeof supplement === 'string') {
      suppEl.innerText = supplement;
    } else if (supplement instanceof Node) {
      suppEl.appendChild(supplement);
    }
    body.appendChild(suppEl);
  }

  // --- Footer ---
  const footer = document.createElement('div');
  footer.className = 'storybook-dialog-footer';

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'storybook-dialog-btn storybook-dialog-btn--cancel';
  cancelBtn.innerText = cancelLabel;
  cancelBtn.addEventListener('click', onCancel);

  const confirmBtn = document.createElement('button');
  confirmBtn.type = 'button';
  confirmBtn.className = 'storybook-dialog-btn storybook-dialog-btn--confirm';
  confirmBtn.innerText = confirmLabel;
  confirmBtn.addEventListener('click', onConfirm);

  footer.appendChild(cancelBtn);
  footer.appendChild(confirmBtn);

  dialog.appendChild(body);
  dialog.appendChild(footer);

  return dialog;
};
