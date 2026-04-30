import './file-object.css';

/**
 * FileObjectコンポーネントを生成する。
 *
 * アップロードしたファイルを確認・削除できるコンポーネント。
 * ファイル名が長い場合は改行せずに末尾「...」で省略する。
 *
 * @param {Object}   props
 * @param {string}   [props.fileName='FileName.csv'] - ファイル名
 * @param {string}   [props.fileSize='']             - ファイルサイズ文字列（例: '88KB'）
 * @param {Function} [props.onRemove]                - × ボタンのコールバック
 * @returns {HTMLElement}
 */
export const createFileObject = ({
  fileName = 'FileName.csv',
  fileSize = '',
  onRemove,
} = {}) => {
  // --- Root ---
  const root = document.createElement('div');
  root.className = 'storybook-file-object';

  // --- Icon ---
  const iconWrap = document.createElement('div');
  iconWrap.className = 'storybook-file-object__icon';
  iconWrap.setAttribute('aria-hidden', 'true');
  iconWrap.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="24" height="24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="8" y1="13" x2="16" y2="13"/>
      <line x1="8" y1="17" x2="14" y2="17"/>
    </svg>
  `;

  // --- Info ---
  const info = document.createElement('div');
  info.className = 'storybook-file-object__info';

  const nameEl = document.createElement('p');
  nameEl.className = 'storybook-file-object__name';
  nameEl.textContent = fileName;
  nameEl.title = fileName;
  info.appendChild(nameEl);

  if (fileSize) {
    const sizeEl = document.createElement('p');
    sizeEl.className = 'storybook-file-object__size';
    sizeEl.textContent = fileSize;
    info.appendChild(sizeEl);
  }

  // --- Remove button ---
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.className = 'storybook-file-object__remove';
  removeBtn.setAttribute('aria-label', 'ファイルを削除');
  removeBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         width="16" height="16" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;
  removeBtn.addEventListener('click', () => {
    if (typeof onRemove === 'function') onRemove(fileName);
  });

  root.appendChild(iconWrap);
  root.appendChild(info);
  root.appendChild(removeBtn);

  return root;
};
