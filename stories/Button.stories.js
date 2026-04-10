import { createButton } from './Button';

export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Tertiary', 'Negative', 'Danger', 'Ghost'],
    },
    state: {
      control: 'inline-radio',
      options: ['Default', 'Hover', 'Disable'],
    },
    label: { control: 'text' },
  },
};

export const Primary = {
  args: {
    intent: 'Primary',
    state: 'Default',
    label: 'ボタン',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/u0fFtcvDvMbfcfsp1YMpgy/Design-System-2.0--AI-Native-?node-id=57-15&t=BptmAbOb3AoEVTR7-1',
    },
  },
};
