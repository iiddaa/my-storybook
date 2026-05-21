import './accordion-list.css';

// ── アイコン ──────────────────────────────────────────────────

// List パターン: 閉じている（→）
const CARET_RIGHT = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// List パターン: 開いている（↓）
const CARET_DOWN = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// FAQ パターン: 閉じている（↓）
const ARROW_DOWN = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// FAQ パターン: 開いている（↑）
const ARROW_UP = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 12.5L10 7.5L15 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ── コンポーネント ─────────────────────────────────────────────

/**
 * AccordionList コンポーネントを生成する。
 *
 * 全体像を把握しやすくするために見出しのみを表示し、
 * 自由に開閉して内容を確認できる。
 *
 * @param {Object}   props
 * @param {string}   [props.pattern='list']      - 'list'（シンプルなアコーディオン）| 'faq'（Q&A形式）
 * @param {Array}    [props.items=[]]
 *   pattern='list' の場合: { heading: string, content: string }
 *   pattern='faq'  の場合: { question: string, answer: string }
 * @param {number[]} [props.openIndexes=[]]      - 初期状態で開くアイテムのインデックス配列
 * @returns {HTMLElement}
 */
export const createAccordionList = ({
  pattern = 'list',
  items = [],
  openIndexes = [],
} = {}) => {
  const openSet = new Set(openIndexes);
  let itemIdCounter = 0;

  const root = document.createElement('div');
  root.className = `storybook-accordion-list storybook-accordion-list--${pattern}`;

  items.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'storybook-accordion-list__item';

    const isOpen = openSet.has(index);
    const contentId = `accordion-content-${++itemIdCounter}`;

    if (pattern === 'list') {
      buildListItem(itemEl, item, isOpen, contentId);
    } else {
      buildFaqItem(itemEl, item, isOpen, contentId);
    }

    root.appendChild(itemEl);
  });

  return root;
};

// ── List パターン ─────────────────────────────────────────────

function buildListItem(itemEl, item, isOpen, contentId) {
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'storybook-accordion-list__trigger';
  trigger.setAttribute('aria-expanded', String(isOpen));
  trigger.setAttribute('aria-controls', contentId);

  const icon = document.createElement('span');
  icon.className = 'storybook-accordion-list__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = isOpen ? CARET_DOWN : CARET_RIGHT;

  const heading = document.createElement('span');
  heading.className = 'storybook-accordion-list__heading';
  heading.textContent = item.heading;

  trigger.appendChild(icon);
  trigger.appendChild(heading);
  itemEl.appendChild(trigger);

  const content = document.createElement('div');
  content.id = contentId;
  content.className = 'storybook-accordion-list__content';
  content.hidden = !isOpen;

  const body = document.createElement('p');
  body.className = 'storybook-accordion-list__body';
  body.textContent = item.content;
  content.appendChild(body);
  itemEl.appendChild(content);

  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    icon.innerHTML = !expanded ? CARET_DOWN : CARET_RIGHT;
    content.hidden = expanded;
  });
}

// ── FAQ パターン ─────────────────────────────────────────────

function buildFaqItem(itemEl, item, isOpen, contentId) {
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'storybook-accordion-list__trigger';
  trigger.setAttribute('aria-expanded', String(isOpen));
  trigger.setAttribute('aria-controls', contentId);

  const labelQ = document.createElement('span');
  labelQ.className = 'storybook-accordion-list__label';
  labelQ.textContent = 'Q.';

  const question = document.createElement('span');
  question.className = 'storybook-accordion-list__question';
  question.textContent = item.question;

  const arrow = document.createElement('span');
  arrow.className = 'storybook-accordion-list__arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.innerHTML = isOpen ? ARROW_UP : ARROW_DOWN;

  trigger.appendChild(labelQ);
  trigger.appendChild(question);
  trigger.appendChild(arrow);
  itemEl.appendChild(trigger);

  const answer = document.createElement('div');
  answer.id = contentId;
  answer.className = 'storybook-accordion-list__answer';
  answer.hidden = !isOpen;

  const labelA = document.createElement('span');
  labelA.className = 'storybook-accordion-list__label';
  labelA.textContent = 'A.';

  const answerText = document.createElement('span');
  answerText.className = 'storybook-accordion-list__answer-text';
  answerText.textContent = item.answer;

  answer.appendChild(labelA);
  answer.appendChild(answerText);
  itemEl.appendChild(answer);

  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!expanded));
    arrow.innerHTML = !expanded ? ARROW_UP : ARROW_DOWN;
    answer.hidden = expanded;
  });
}
