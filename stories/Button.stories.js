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
  // ここに「全体の説明」を書くと、Docsの一番上に出ます
  parameters: {
    docs: {
      description: {
        component: 'AI Nativeデザインシステムのボタンコンポーネントです。用途に応じてIntentを使い分けてください。',
      },
    },
  },
};

export const Primary = {
  args: { intent: 'Primary', state: 'Default', label: 'Primary' },
  parameters: {
    docs: {
      description: {
        story: '【重要】画面内でもっとも優先度の高いアクション（保存、送信など）に使用します。',
      },
    },
  },
};

export const Secondary = {
  args: { intent: 'Secondary', state: 'Default', label: 'Secondary' },
  parameters: {
    docs: {
      description: {
        story: 'Primaryに次ぐアクション（キャンセル、戻るなど）に使用します。',
      },
    },
  },
};

export const Ghost = {
  args: { intent: 'Ghost', state: 'Default', label: 'Ghost' },
  parameters: {
    docs: {
      description: {
        story: 'もっとも優先度の低い、UIの邪魔をしないアクションに使用します。',
      },
    },
  },
};
