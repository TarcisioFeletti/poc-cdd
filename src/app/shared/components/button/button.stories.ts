import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    fontWeight: {
      control: 'select',
      options: ['lighter', 'medium', 'bold', 'bolder'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    icon: {
      control: 'text',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    primary: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Lighter: Story = {
  args: {
    label: 'Button',
    fontWeight: 'lighter',
  },
};

export const Bold: Story = {
  args: {
    label: 'Button',
    fontWeight: 'bold',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Home',
    icon: 'home',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button disabled',
    disabled: true,
  },
};
