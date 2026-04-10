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
  args: { intent: 'Primary', state: 'Default', label: 'Primary' },
  parameters: {
    docs: { story: { description: '画面内でもっとも重要なアクション（保存、送信など）に使用します。原則として1画面に1つだけ配置します。' } },
  },
};

export const Secondary = {
  args: { intent: 'Secondary', state: 'Default', label: 'Secondary' },
  parameters: {
    docs: { story: { description: 'Primaryに次いで優先度の高いアクション（キャンセル、戻る、下書き保存など）に使用します。' } },
  },
};

export const Ghost = {
  args: { intent: 'Ghost', state: 'Default', label: 'Ghost' },
  parameters: {
    docs: { story: { description: 'UIの邪魔をしたくない、もっとも優先度の低いアクションに使用します。' } },
  },
};

export const Danger = {
  args: { intent: 'Danger', state: 'Default', label: 'Danger' },
  parameters: {
    docs: { story: { description: '削除や退会など、ユーザーに注意を促す破壊的な操作に使用します。' } },
  },
};
