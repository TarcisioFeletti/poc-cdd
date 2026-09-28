import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select';

interface Options {
  id: number;
  name: string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<SelectComponent<Options>> = {
  title: 'Components/SelectComponent',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
};

export default meta;
type Story = StoryObj<SelectComponent<Options>>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Nome',
    options: [
      { id: 1, name: 'Teste' },
      { id: 2, name: 'Teste 2' },
      { id: 3, name: 'Teste 3' },
      { id: 4, name: 'Teste 4' },
      { id: 5, name: 'Teste 5' },
    ],
    optionLabel: 'name',
  },
};
