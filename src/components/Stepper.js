import './stepper.css';

/**
 * Stepper コンポーネントを生成する。
 *
 * ユーザーが安心してゴールに向かえるために、タスクを「わかりやすい手順」で表示し、
 * 全体像や現在地を把握できる。
 *
 * @param {Object}   props
 * @param {string}   [props.direction='horizontal'] - 'horizontal' | 'vertical'
 * @param {Array}    [props.steps=[]]
 *   { label: string, status: 'current' | 'complete' | 'unvisited' }
 * @returns {HTMLElement}
 */
export const createStepper = ({ direction = 'horizontal', steps = [] } = {}) => {
  const root = document.createElement('div');
  root.className = `storybook-stepper storybook-stepper--${direction}`;
  root.setAttribute('aria-label', 'ステップナビゲーション');

  if (direction === 'horizontal') {
    buildHorizontal(root, steps);
  } else {
    buildVertical(root, steps);
  }

  return root;
};

// ── Horizontal ─────────────────────────────────────────────

function buildHorizontal(root, steps) {
  steps.forEach((step, index) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'storybook-stepper__step';
    stepEl.setAttribute('aria-current', step.status === 'current' ? 'step' : 'false');

    const circle = makeCircle(step.status, index + 1);
    const label = makeLabel(step.status, step.label);

    stepEl.appendChild(circle);
    stepEl.appendChild(label);
    root.appendChild(stepEl);

    if (index < steps.length - 1) {
      root.appendChild(makeConnector(step.status === 'complete'));
    }
  });
}

// ── Vertical ───────────────────────────────────────────────

function buildVertical(root, steps) {
  steps.forEach((step, index) => {
    const item = document.createElement('div');
    item.className = 'storybook-stepper__item';
    item.setAttribute('aria-current', step.status === 'current' ? 'step' : 'false');

    const track = document.createElement('div');
    track.className = 'storybook-stepper__track';

    track.appendChild(makeCircle(step.status, index + 1));

    if (index < steps.length - 1) {
      track.appendChild(makeConnector(step.status === 'complete'));
    }

    item.appendChild(track);
    item.appendChild(makeLabel(step.status, step.label));
    root.appendChild(item);
  });
}

// ── ヘルパー ───────────────────────────────────────────────

function makeCircle(status, num) {
  const el = document.createElement('div');
  el.className = `storybook-stepper__circle storybook-stepper__circle--${status}`;
  el.textContent = String(num);
  return el;
}

function makeLabel(status, text) {
  const el = document.createElement('p');
  el.className = `storybook-stepper__label storybook-stepper__label--${status}`;
  el.textContent = text;
  return el;
}

function makeConnector(isActive) {
  const el = document.createElement('div');
  el.className = `storybook-stepper__connector storybook-stepper__connector--${isActive ? 'active' : 'inactive'}`;
  return el;
}
