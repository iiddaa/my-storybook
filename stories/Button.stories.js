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
  parameters: {
    docs: {
      description: {
        component: 'AI Nativeデザインシステムのボタンです。用途に合わせてIntentを選択してください。',
      },
    },
  },
};

export const Primary = {
  args: { intent: 'Primary', state: 'Default', label: 'Primary' },
  parameters: { docs: { description: { story: '画面内でもっとも優先度の高いアクション（保存、送信など）に使用します。' } } },
};

export const Secondary = {
  args: { intent: 'Secondary', state: 'Default', label: 'Secondary' },
  parameters: { docs: { description: { story: 'Primaryに次ぐアクション（キャンセル、戻るなど）に使用します。' } } },
};

export const Tertiary = {
  args: { intent: 'Tertiary', state: 'Default', label: 'Tertiary' },
  parameters: { docs: { description: { story: '補足的なアクションに使用します。' } } },
};

export const Negative = {
  args: { intent: 'Negative', state: 'Default', label: 'Negative' },
  parameters: { docs: { description: { story: '否定的なニュアンスを含むが、Dangerほど破壊的ではない操作に使用します。' } } },
};

export const Danger = {
  args: { intent: 'Danger', state: 'Default', label: 'Danger' },
  parameters: { docs: { description: { story: '削除や退会など、ユーザーに注意を促す破壊的な操作に使用します。' } } },
};

export const Ghost = {
  args: { intent: 'Ghost', state: 'Default', label: 'Ghost' },
  parameters: { docs: { description: { story: 'もっとも優先度の低い、UIの邪魔をしないアクションに使用します。' } } },
};
