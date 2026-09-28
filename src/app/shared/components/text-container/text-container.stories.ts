import type { Meta, StoryObj } from '@storybook/angular';
import { TextContainer } from './text-container';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TextContainer> = {
  title: 'Components/TextContainer',
  component: TextContainer,
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<TextContainer>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args: any) => ({
    template: `<text-container><p>Teste</p></text-container>`,
  }),
};
