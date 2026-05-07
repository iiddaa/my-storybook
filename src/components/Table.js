import './table.css';

const SORT_ICON_SVG = `
  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
    <path d="M5 6.5L8 3.5L11 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 9.5L8 12.5L11 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

/**
 * Table コンポーネントを生成する。
 *
 * 表形式で複数の情報を表示するもの。
 * 情報がルールに沿って整理されており、ユーザーは確認、比較、操作しやすくなる。
 *
 * @param {Object}    props
 * @param {string}    [props.title='']          - テーブル上部のタイトル
 * @param {Column[]}  [props.columns=[]]        - カラム定義
 * @param {Object[]}  [props.rows=[]]           - 行データ（{ [key]: value | { main, sub } }）
 * @param {boolean}   [props.showCheckbox=true] - チェックボックスを表示するか
 * @param {boolean}   [props.showAction=true]   - 行ごとのアクションボタンを表示するか
 * @param {string}    [props.actionLabel='編集'] - アクションボタンのラベル
 * @param {Function}  [props.onAction]          - アクションボタンクリック時のコールバック（row を引数に渡す）
 * @param {Function}  [props.onSort]            - ソートアイコンクリック時のコールバック（column.key を引数に渡す）
 * @returns {HTMLElement}
 *
 * @typedef {Object} Column
 * @property {string}  key       - 行データのキー
 * @property {string}  label     - ヘッダーに表示するラベル
 * @property {string}  [width]   - カラム幅（例: '60px', '200px'）。未指定の場合は flex: 1
 * @property {boolean} [sortable=false] - ソートアイコンを表示するか
 */
export const createTable = ({
  title = '',
  columns = [],
  rows = [],
  showCheckbox = true,
  showAction = true,
  actionLabel = '編集',
  onAction,
  onSort,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'storybook-table';
  root.setAttribute('role', 'region');

  // --- タイトル ---
  if (title) {
    const titleEl = document.createElement('p');
    titleEl.className = 'storybook-table__title';
    titleEl.textContent = title;
    root.appendChild(titleEl);
  }

  // --- テーブル本体 ---
  const tableBody = document.createElement('div');
  tableBody.className = 'storybook-table__body';
  tableBody.setAttribute('role', 'table');

  // --- ヘッダー行 ---
  const headerRow = document.createElement('div');
  headerRow.className = 'storybook-table__header';
  headerRow.setAttribute('role', 'row');

  if (showCheckbox) {
    const checkboxCell = document.createElement('div');
    checkboxCell.className = 'storybook-table__checkbox';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.setAttribute('aria-label', 'すべて選択');
    checkboxCell.appendChild(cb);
    headerRow.appendChild(checkboxCell);
  }

  columns.forEach((col) => {
    const cell = document.createElement('div');
    cell.className = [
      'storybook-table__header-cell',
      !col.width ? 'storybook-table__header-cell--flex' : '',
    ].filter(Boolean).join(' ');
    if (col.width) cell.style.width = col.width;
    cell.setAttribute('role', 'columnheader');

    const label = document.createElement('span');
    label.className = 'storybook-table__header-label';
    label.textContent = col.label;
    cell.appendChild(label);

    if (col.sortable) {
      const sortBtn = document.createElement('button');
      sortBtn.type = 'button';
      sortBtn.className = 'storybook-table__sort-icon';
      sortBtn.setAttribute('aria-label', `${col.label}でソート`);
      sortBtn.innerHTML = SORT_ICON_SVG;
      sortBtn.addEventListener('click', () => {
        if (typeof onSort === 'function') onSort(col.key);
      });
      cell.appendChild(sortBtn);
    }

    headerRow.appendChild(cell);
  });

  // アクション列のスペーサー（ボタン幅分の余白）
  if (showAction) {
    const spacer = document.createElement('div');
    spacer.style.width = '0';
    headerRow.appendChild(spacer);
  }

  tableBody.appendChild(headerRow);

  // --- データ行 ---
  rows.forEach((row) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'storybook-table__row';
    rowEl.setAttribute('role', 'row');

    const cellsArea = document.createElement('div');
    cellsArea.className = 'storybook-table__row-cells';

    if (showCheckbox) {
      const checkboxCell = document.createElement('div');
      checkboxCell.className = 'storybook-table__checkbox';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.setAttribute('aria-label', '行を選択');
      checkboxCell.appendChild(cb);
      cellsArea.appendChild(checkboxCell);
    }

    columns.forEach((col) => {
      const value = row[col.key];

      // { main, sub } 形式のセル（2行テキスト）
      if (value && typeof value === 'object' && ('main' in value || 'sub' in value)) {
        const stackEl = document.createElement('div');
        stackEl.className = 'storybook-table__cell-stack';
        if (col.width) stackEl.style.width = col.width;
        if (!col.width) stackEl.style.flex = '1 0 0';

        if (value.sub) {
          const subEl = document.createElement('span');
          subEl.className = 'storybook-table__cell-sub';
          subEl.textContent = value.sub;
          stackEl.appendChild(subEl);
        }
        if (value.main) {
          const mainEl = document.createElement('span');
          mainEl.className = 'storybook-table__cell-main';
          mainEl.textContent = value.main;
          stackEl.appendChild(mainEl);
        }
        cellsArea.appendChild(stackEl);
      } else {
        const cellEl = document.createElement('div');
        cellEl.className = [
          'storybook-table__cell',
          !col.width ? 'storybook-table__cell--flex' : '',
        ].filter(Boolean).join(' ');
        if (col.width) cellEl.style.width = col.width;
        cellEl.textContent = value != null ? String(value) : '';
        cellsArea.appendChild(cellEl);
      }
    });

    rowEl.appendChild(cellsArea);

    // アクションボタン
    if (showAction) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'storybook-table__action-btn';
      btn.textContent = actionLabel;
      btn.addEventListener('click', () => {
        if (typeof onAction === 'function') onAction(row);
      });
      rowEl.appendChild(btn);
    }

    tableBody.appendChild(rowEl);
  });

  root.appendChild(tableBody);
  return root;
};
