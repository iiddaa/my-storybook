import './date-picker.css';

const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土'];
const MONTH_LABELS = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

const ARROW_LEFT = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ARROW_RIGHT = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month - 1, 1).getDay(); // 0=Sunday
}

/**
 * DatePicker コンポーネントを生成する。
 *
 * 正確な日付情報をカレンダーから直観的に入力できるもの。
 * 有り得ない日付入力を防ぐ役割も担う。
 *
 * @param {Object}   props
 * @param {string}   [props.type='date']           - 'date'（日付選択）| 'month'（月選択）
 * @param {number}   [props.year]                  - 表示する年（省略時: 現在の年）
 * @param {number}   [props.month]                 - 表示する月 1-12（type='date' 時。省略時: 現在の月）
 * @param {Object}   [props.selectedDate=null]     - 選択済み日付 { year, month, day }（type='date' 時）
 * @param {Object}   [props.selectedMonth=null]    - 選択済み月 { year, month }（type='month' 時）
 * @param {Function} [props.onSelect=null]         - 選択時のコールバック。type='date' なら { year, month, day }、type='month' なら { year, month } を渡す
 * @returns {HTMLElement}
 */
export const createDatePicker = ({
  type = 'date',
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  selectedDate = null,
  selectedMonth = null,
  onSelect = null,
} = {}) => {
  let currentYear = year;
  let currentMonth = month;
  let currentSelectedDate = selectedDate ? { ...selectedDate } : null;
  let currentSelectedMonth = selectedMonth ? { ...selectedMonth } : null;

  const root = document.createElement('div');
  root.className = 'storybook-date-picker';

  function createNavHeader(labelText, onPrev, onNext) {
    const header = document.createElement('div');
    header.className = 'storybook-date-picker__header';

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'storybook-date-picker__nav-btn';
    prevBtn.innerHTML = ARROW_LEFT;
    prevBtn.setAttribute('aria-label', '前へ');
    prevBtn.addEventListener('click', onPrev);

    const label = document.createElement('span');
    label.className = 'storybook-date-picker__label';
    label.textContent = labelText;

    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'storybook-date-picker__nav-btn';
    nextBtn.innerHTML = ARROW_RIGHT;
    nextBtn.setAttribute('aria-label', '次へ');
    nextBtn.addEventListener('click', onNext);

    header.appendChild(prevBtn);
    header.appendChild(label);
    header.appendChild(nextBtn);
    return header;
  }

  function renderDate(calendar) {
    // ヘッダー
    calendar.appendChild(
      createNavHeader(
        `${currentYear}年${currentMonth}月`,
        () => {
          if (currentMonth === 1) { currentYear--; currentMonth = 12; }
          else { currentMonth--; }
          render();
        },
        () => {
          if (currentMonth === 12) { currentYear++; currentMonth = 1; }
          else { currentMonth++; }
          render();
        }
      )
    );

    // 曜日ヘッダー
    const weekRow = document.createElement('div');
    weekRow.className = 'storybook-date-picker__week';
    WEEKDAYS.forEach((day) => {
      const cell = document.createElement('span');
      cell.className = 'storybook-date-picker__weekday';
      cell.textContent = day;
      weekRow.appendChild(cell);
    });
    calendar.appendChild(weekRow);

    // 日付グリッド
    const datesGrid = document.createElement('div');
    datesGrid.className = 'storybook-date-picker__dates';
    datesGrid.setAttribute('role', 'grid');
    datesGrid.setAttribute('aria-label', `${currentYear}年${currentMonth}月`);

    // 1日の曜日オフセット（空白セル）
    const firstDay = getFirstDayOfWeek(currentYear, currentMonth);
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('span');
      empty.className = 'storybook-date-picker__item storybook-date-picker__item--empty';
      empty.setAttribute('aria-hidden', 'true');
      datesGrid.appendChild(empty);
    }

    // 日付セル
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    for (let day = 1; day <= daysInMonth; day++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'storybook-date-picker__item';
      btn.textContent = String(day);
      btn.setAttribute('role', 'gridcell');
      btn.setAttribute('aria-label', `${currentYear}年${currentMonth}月${day}日`);

      const isSelected =
        currentSelectedDate &&
        currentSelectedDate.year === currentYear &&
        currentSelectedDate.month === currentMonth &&
        currentSelectedDate.day === day;

      if (isSelected) {
        btn.classList.add('storybook-date-picker__item--selected');
        btn.setAttribute('aria-selected', 'true');
      }

      btn.addEventListener('click', () => {
        currentSelectedDate = { year: currentYear, month: currentMonth, day };
        if (typeof onSelect === 'function') onSelect({ ...currentSelectedDate });
        render();
      });

      datesGrid.appendChild(btn);
    }

    calendar.appendChild(datesGrid);
  }

  function renderMonth(calendar) {
    // ヘッダー
    calendar.appendChild(
      createNavHeader(
        `${currentYear}年`,
        () => { currentYear--; render(); },
        () => { currentYear++; render(); }
      )
    );

    // 月グリッド
    const monthsGrid = document.createElement('div');
    monthsGrid.className = 'storybook-date-picker__months';
    monthsGrid.setAttribute('role', 'grid');
    monthsGrid.setAttribute('aria-label', `${currentYear}年`);

    MONTH_LABELS.forEach((label, index) => {
      const m = index + 1;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'storybook-date-picker__item storybook-date-picker__item--month-cell';
      btn.textContent = label;
      btn.setAttribute('role', 'gridcell');
      btn.setAttribute('aria-label', `${currentYear}年${m}月`);

      const isSelected =
        currentSelectedMonth &&
        currentSelectedMonth.year === currentYear &&
        currentSelectedMonth.month === m;

      if (isSelected) {
        btn.classList.add('storybook-date-picker__item--selected');
        btn.setAttribute('aria-selected', 'true');
      }

      btn.addEventListener('click', () => {
        currentSelectedMonth = { year: currentYear, month: m };
        if (typeof onSelect === 'function') onSelect({ ...currentSelectedMonth });
        render();
      });

      monthsGrid.appendChild(btn);
    });

    calendar.appendChild(monthsGrid);
  }

  function render() {
    root.innerHTML = '';
    const calendar = document.createElement('div');
    calendar.className = 'storybook-date-picker__calendar';

    if (type === 'date') {
      renderDate(calendar);
    } else {
      renderMonth(calendar);
    }

    root.appendChild(calendar);
  }

  render();
  return root;
};
