import './pagination.css';

const ICONS = {
  arrowLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  caretDown: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4.5 6.5L8 10L11.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
};

/**
 * Pagination コンポーネントを生成する。
 *
 * 大量のコンテンツを適切なページごとに分割し、ページの移動を効率的に行えるもの。
 *
 * @param {Object}   props
 * @param {number}   [props.totalCount=200]             - 総件数
 * @param {number}   [props.totalPages=2]               - 総ページ数
 * @param {number}   [props.currentPage=1]              - 現在のページ番号
 * @param {string}   [props.unit='件']                  - 件数単位テキスト（例: '店舗'）
 * @param {boolean}  [props.showPerPage=false]          - 表示件数セレクターを表示するか
 * @param {number}   [props.perPage=100]                - 1ページの表示件数
 * @param {number[]} [props.perPageOptions=[25,50,100]] - 表示件数の選択肢
 * @param {boolean}  [props.disabled=false]             - disabled状態
 * @param {Function} [props.onPageChange=null]          - ページ変更コールバック (page: number) => void
 * @param {Function} [props.onPerPageChange=null]       - 表示件数変更コールバック (perPage: number) => void
 * @returns {HTMLElement}
 */
export const createPagination = ({
  totalCount = 200,
  totalPages = 2,
  currentPage = 1,
  unit = '件',
  showPerPage = false,
  perPage = 100,
  perPageOptions = [25, 50, 100],
  disabled = false,
  onPageChange = null,
  onPerPageChange = null,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'storybook-pagination';
  root.setAttribute('role', 'navigation');
  root.setAttribute('aria-label', 'ページネーション');

  // 件数テキスト（"1 - 100 / 200店舗"）
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalCount);
  const countEl = document.createElement('span');
  countEl.className = 'storybook-pagination__count';
  countEl.textContent = `${start} - ${end} / ${totalCount}${unit}`;
  root.appendChild(countEl);

  // 表示件数セレクター（showPerPage=true のみ表示）
  if (showPerPage) {
    const perPageWrap = document.createElement('div');
    perPageWrap.className = 'storybook-pagination__per-page';

    const fieldWrap = document.createElement('div');
    fieldWrap.className = [
      'storybook-pagination__per-page-field',
      disabled ? 'storybook-pagination__per-page-field--disabled' : '',
    ].filter(Boolean).join(' ');

    const select = document.createElement('select');
    select.className = 'storybook-pagination__per-page-select';
    select.disabled = disabled;
    select.setAttribute('aria-label', '1ページの表示件数');
    perPageOptions.forEach((opt) => {
      const option = document.createElement('option');
      option.value = String(opt);
      option.textContent = `${opt}件`;
      option.selected = opt === perPage;
      select.appendChild(option);
    });
    if (typeof onPerPageChange === 'function') {
      select.addEventListener('change', (e) => onPerPageChange(Number(e.target.value)));
    }

    const caret = document.createElement('span');
    caret.className = 'storybook-pagination__per-page-caret';
    caret.innerHTML = ICONS.caretDown;

    fieldWrap.appendChild(select);
    fieldWrap.appendChild(caret);
    perPageWrap.appendChild(fieldWrap);

    const perPageLabel = document.createElement('span');
    perPageLabel.className = 'storybook-pagination__per-page-label';
    perPageLabel.textContent = '表示';
    perPageWrap.appendChild(perPageLabel);

    root.appendChild(perPageWrap);
  }

  // ページナビゲーション（前ボタン + ページ入力 + 次ボタン）
  const pagesWrap = document.createElement('div');
  pagesWrap.className = 'storybook-pagination__pages';

  // 前ページボタン
  const isPrevDisabled = disabled || currentPage <= 1;
  const prevBtn = document.createElement('button');
  prevBtn.type = 'button';
  prevBtn.className = [
    'storybook-pagination__btn',
    'storybook-pagination__btn--prev',
    isPrevDisabled ? 'storybook-pagination__btn--inactive' : '',
  ].filter(Boolean).join(' ');
  prevBtn.setAttribute('aria-label', '前のページへ');
  if (isPrevDisabled) prevBtn.setAttribute('aria-disabled', 'true');
  prevBtn.innerHTML = ICONS.arrowLeft;
  if (!isPrevDisabled && typeof onPageChange === 'function') {
    prevBtn.addEventListener('click', () => onPageChange(currentPage - 1));
  }
  pagesWrap.appendChild(prevBtn);

  // ページ入力 + "/Nページ"
  const pageCountWrap = document.createElement('div');
  pageCountWrap.className = 'storybook-pagination__page-count';

  const pageInput = document.createElement('input');
  pageInput.type = 'text';
  pageInput.inputMode = 'numeric';
  pageInput.className = [
    'storybook-pagination__page-input',
    disabled ? 'storybook-pagination__page-input--disabled' : '',
  ].filter(Boolean).join(' ');
  pageInput.value = String(currentPage);
  pageInput.disabled = disabled;
  pageInput.setAttribute('aria-label', `ページ番号（全${totalPages}ページ）`);

  const commitPage = () => {
    if (typeof onPageChange !== 'function') return;
    const val = Math.min(Math.max(1, parseInt(pageInput.value, 10) || 1), totalPages);
    pageInput.value = String(val);
    onPageChange(val);
  };
  pageInput.addEventListener('blur', commitPage);
  pageInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') commitPage(); });

  const pageTotalEl = document.createElement('span');
  pageTotalEl.className = 'storybook-pagination__page-total';
  pageTotalEl.textContent = `/${totalPages}ページ`;

  pageCountWrap.appendChild(pageInput);
  pageCountWrap.appendChild(pageTotalEl);
  pagesWrap.appendChild(pageCountWrap);

  // 次ページボタン
  const isNextDisabled = disabled || currentPage >= totalPages;
  const nextBtn = document.createElement('button');
  nextBtn.type = 'button';
  nextBtn.className = [
    'storybook-pagination__btn',
    'storybook-pagination__btn--next',
    isNextDisabled ? 'storybook-pagination__btn--inactive' : '',
  ].filter(Boolean).join(' ');
  nextBtn.setAttribute('aria-label', '次のページへ');
  if (isNextDisabled) nextBtn.setAttribute('aria-disabled', 'true');
  nextBtn.innerHTML = ICONS.arrowRight;
  if (!isNextDisabled && typeof onPageChange === 'function') {
    nextBtn.addEventListener('click', () => onPageChange(currentPage + 1));
  }
  pagesWrap.appendChild(nextBtn);

  root.appendChild(pagesWrap);
  return root;
};
