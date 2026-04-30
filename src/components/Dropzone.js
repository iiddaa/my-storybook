import './dropzone.css';

/**
 * Dropzoneコンポーネントを生成する。
 *
 * アップロードできることを直感的に伝え、かつドラッグ&ドロップで
 * 手軽にファイルをアップロードできるコンポーネント。
 * クリック可能なのはボタン領域のみ（エリア全体はクリックに反応しない）。
 *
 * @param {Object}   props
 * @param {string}   [props.hint='25MB以下 / 最大n件まで / CSVのみ'] - 制約テキスト
 * @param {boolean}  [props.isDragOver=false]  - ドラッグオーバー状態（Storybook制御用）
 * @param {Function} [props.onSelectFile]      - ファイル選択ボタンのコールバック
 * @param {Function} [props.onDrop]            - ドロップ時のコールバック（FileList を受け取る）
 * @returns {HTMLElement}
 */
export const createDropzone = ({
  hint = '25MB以下 / 最大n件まで / CSVのみ',
  isDragOver = false,
  onSelectFile,
  onDrop,
} = {}) => {
  // --- Root ---
  const dropzone = document.createElement('div');
  dropzone.className =
    'storybook-dropzone' + (isDragOver ? ' storybook-dropzone--drag-over' : '');
  dropzone.setAttribute('role', 'region');
  dropzone.setAttribute('aria-label', 'ファイルアップロードエリア');

  // --- Text area ---
  const textArea = document.createElement('div');
  textArea.className = 'storybook-dropzone__text';

  const titleEl = document.createElement('p');
  titleEl.className = 'storybook-dropzone__title';
  titleEl.textContent = 'ここにファイルをドラッグ&ドロップ';
  textArea.appendChild(titleEl);

  const separator = document.createElement('p');
  separator.className = 'storybook-dropzone__separator';
  separator.textContent = 'または';
  textArea.appendChild(separator);

  dropzone.appendChild(textArea);

  // --- Actions ---
  const actions = document.createElement('div');
  actions.className = 'storybook-dropzone__actions';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'storybook-dropzone__btn';
  btn.textContent = 'ファイルを選択';
  btn.addEventListener('click', () => {
    if (typeof onSelectFile === 'function') onSelectFile();
  });
  actions.appendChild(btn);

  if (hint) {
    const hintEl = document.createElement('p');
    hintEl.className = 'storybook-dropzone__hint';
    hintEl.textContent = hint;
    actions.appendChild(hintEl);
  }

  dropzone.appendChild(actions);

  // --- Drag events ---
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('storybook-dropzone--drag-over');
  });

  dropzone.addEventListener('dragleave', (e) => {
    if (!dropzone.contains(e.relatedTarget)) {
      dropzone.classList.remove('storybook-dropzone--drag-over');
    }
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('storybook-dropzone--drag-over');
    if (typeof onDrop === 'function') onDrop(e.dataTransfer.files);
  });

  return dropzone;
};
