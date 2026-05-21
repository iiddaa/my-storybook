import './coach-mark.css';

/**
 * CoachMark コンポーネントを生成する。
 *
 * 新機能リリース時や、初めて機能を使うときに、
 * それが画面のどこで操作できるかを示すもの。
 *
 * @param {Object}   props
 * @param {string}   [props.placement='top']     - 配置方向: 'top'（上配置）| 'bottom'（下配置）| 'left'（左配置）| 'right'（右配置）
 * @param {string}   [props.title='']            - タイトルテキスト
 * @param {string}   [props.description='']      - 説明文テキスト（改行 \n 対応）
 * @param {string}   [props.buttonLabel='OK']    - ボタンのラベル
 * @param {string}   [props.image=null]          - 画像URL（省略可）
 * @param {number|string} [props.imageHeight=null] - 画像の高さ（省略時は画像の自然な高さ）。例: 200 または '50%'
 * @param {Function} [props.onClose=null]        - ボタンクリック時のコールバック
 * @returns {HTMLElement}
 */
export const createCoachMark = ({
  placement = 'top',
  title = '',
  description = '',
  buttonLabel = 'OK',
  image = null,
  imageHeight = null,
  onClose = null,
} = {}) => {
  const root = document.createElement('div');
  root.className = `storybook-coach-mark storybook-coach-mark--${placement}`;
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'false');

  const tail = document.createElement('div');
  tail.className = 'storybook-coach-mark__tail';
  tail.setAttribute('aria-hidden', 'true');

  const card = document.createElement('div');
  card.className = 'storybook-coach-mark__card';

  // 画像（省略可）
  if (image) {
    const img = document.createElement('img');
    img.className = 'storybook-coach-mark__image';
    img.src = image;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    if (imageHeight !== null) {
      img.style.height = typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight;
    }
    card.appendChild(img);
  }

  // タイトル
  if (title) {
    const titleEl = document.createElement('p');
    titleEl.className = 'storybook-coach-mark__title';
    titleEl.textContent = title;
    card.appendChild(titleEl);
  }

  // 説明文
  if (description) {
    const descEl = document.createElement('p');
    descEl.className = 'storybook-coach-mark__description';
    descEl.textContent = description;
    card.appendChild(descEl);
  }

  // ボタンエリア
  const actions = document.createElement('div');
  actions.className = 'storybook-coach-mark__actions';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'storybook-coach-mark__button';
  button.textContent = buttonLabel;
  button.addEventListener('click', () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  });

  actions.appendChild(button);
  card.appendChild(actions);

  // placement に応じて矢印とカードの順序を制御
  // top・left: [card, tail] / bottom・right: [tail, card]
  if (placement === 'bottom' || placement === 'right') {
    root.appendChild(tail);
    root.appendChild(card);
  } else {
    root.appendChild(card);
    root.appendChild(tail);
  }

  return root;
};
