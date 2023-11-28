import type { Meta, StoryObj } from '@storybook/react';

import Search from '../../components/Search';

const meta = {
  title: 'Example/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeHolder: 'Search products...',
  },
};
