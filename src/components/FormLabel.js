import './form-label.css';

/**
 * FormLabel コンポーネントを生成する。
 *
 * エリアに何を入力すべきなのか、必須かどうかも含めて示すもの。
 * ラベルテキスト・必須バッジ・説明文の組み合わせで構成される。
 *
 * @param {Object}  props
 * @param {string}  [props.label='ラベル']  - ラベルテキスト
 * @param {boolean} [props.required=false]  - 必須バッジを表示するか
 * @param {string}  [props.description=''] - ラベル下の説明文（空文字の場合は非表示）
 * @returns {HTMLElement}
 */
export const createFormLabel = ({
  label = 'ラベル',
  required = false,
  description = '',
} = {}) => {
  const root = document.createElement('div');
  root.className = 'storybook-form-label';

  // --- ヘッダー行（ラベル + 必須バッジ） ---
  const header = document.createElement('div');
  header.className = 'storybook-form-label__header';

  const labelEl = document.createElement('span');
  labelEl.className = 'storybook-form-label__text';
  labelEl.textContent = label;
  header.appendChild(labelEl);

  if (required) {
    const badge = document.createElement('span');
    badge.className = 'storybook-form-label__required';
    badge.textContent = '必須';
    header.appendChild(badge);
  }

  root.appendChild(header);

  // --- 説明文 ---
  if (description) {
    const desc = document.createElement('p');
    desc.className = 'storybook-form-label__description';
    desc.textContent = description;
    root.appendChild(desc);
  }

  return root;
};
