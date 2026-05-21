import './progress-bar.css';

/**
 * ProgressBar コンポーネントを生成する。
 *
 * ユーザー操作へのフィードバックに一定以上の時間がかかる場合、
 * 全体の処理時間を可視化するために使用する。
 *
 * @param {Object}  props
 * @param {number}  [props.value=0]        - 進捗率（0〜100）
 * @param {string}  [props.label='']       - バー上部のタイトルテキスト（改行 \n 可）
 * @param {string}  [props.description=''] - タイトル下の説明テキスト
 * @returns {HTMLElement}
 */
export const createProgressBar = ({ value = 0, label = '', description = '' } = {}) => {
  const clamped = Math.min(100, Math.max(0, value));

  const root = document.createElement('div');
  root.className = 'storybook-progress-bar';
  root.setAttribute('role', 'progressbar');
  root.setAttribute('aria-valuenow', String(clamped));
  root.setAttribute('aria-valuemin', '0');
  root.setAttribute('aria-valuemax', '100');
  if (label) root.setAttribute('aria-label', label.replace(/\n/g, ' '));

  if (label || description) {
    const text = document.createElement('div');
    text.className = 'storybook-progress-bar__text';

    if (label) {
      const labelEl = document.createElement('p');
      labelEl.className = 'storybook-progress-bar__label';
      labelEl.textContent = label;
      text.appendChild(labelEl);
    }

    if (description) {
      const descEl = document.createElement('p');
      descEl.className = 'storybook-progress-bar__description';
      descEl.textContent = description;
      text.appendChild(descEl);
    }

    root.appendChild(text);
  }

  const track = document.createElement('div');
  track.className = 'storybook-progress-bar__track';

  const fill = document.createElement('div');
  fill.className = 'storybook-progress-bar__fill';
  fill.style.width = `${clamped}%`;

  track.appendChild(fill);
  root.appendChild(track);

  return root;
};
