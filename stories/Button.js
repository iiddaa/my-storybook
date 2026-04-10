import './button.css';

export const createButton = ({
  intent = 'Primary',
  state = 'Default',
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // Figmaのバリアント名をそのままクラス名として追加する
  // 例: .storybook-button--Primary, .storybook-button--Danger など
  const mode = `storybook-button--${intent}`;
  const stateClass = `storybook-button--${state}`;
  
  btn.className = ['storybook-button', mode, stateClass].join(' ');

  return btn;
};
