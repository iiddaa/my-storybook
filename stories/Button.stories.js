import { createButton } from './Button';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
};

export const AllVariants = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 160px)';
    container.style.gap = '15px';
    container.style.padding = '20px';

    const intents = ['Primary', 'Secondary', 'Tertiary', 'Negative', 'Danger', 'Ghost'];
    const states = ['Default', 'Hover', 'Disable'];

    intents.forEach(intent => {
      states.forEach(state => {
        const btn = createButton({ intent, state, label: `${intent} ${state}` });
        container.appendChild(btn);
      });
    });
    return container;
  },
};
