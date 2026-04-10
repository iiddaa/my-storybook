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
  // 全てのストーリーに共通のFigma設定
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/u0fFtcvDvMbfcfsp1YMpgy/Design-System-2.0--AI-Native-?node-id=57-15&t=BptmAbOb3AoEVTR7-1',
    },
  },
};

// ここから左ナビに並べる設定
export const Primary = {
  args: { intent: 'Primary', state: 'Default', label: 'Primary' },
};

export const Secondary = {
  args: { intent: 'Secondary', state: 'Default', label: 'Secondary' },
};

export const Danger = {
  args: { intent: 'Danger', state: 'Default', label: 'Danger' },
};

export const Negative = {
  args: { intent: 'Negative', state: 'Default', label: 'Negative' },
};

export const Ghost = {
  args: { intent: 'Ghost', state: 'Default', label: 'Ghost' },
};

export const Disabled = {
  args: { intent: 'Primary', state: 'Disable', label: 'Disabled' },
};
