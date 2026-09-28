import type { Meta, StoryObj } from '@storybook/angular';

import { PageComponent } from './page.component';

const meta: Meta<PageComponent> = {
  title: 'Example/Page',
  component: PageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<PageComponent>;

export const Default: Story = {};
