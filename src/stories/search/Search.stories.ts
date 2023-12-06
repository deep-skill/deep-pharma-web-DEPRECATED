import type { Meta, StoryObj } from '@storybook/react';

import Search from '../../components/Search';

const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    handleSearch: { action: 'onChange' },
  },
  args: {
    width: 'md',
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'md',
    debouncedDelay: 500,
  },
};

export const Large: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'lg',
    debouncedDelay: 500,
  },
};

export const Small: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'sm',
    debouncedDelay: 500,
  },
};

export const FastDebounced: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'sm',
    debouncedDelay: 300,
  },
};

export const MediumDebounced: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'sm',
    debouncedDelay: 500,
  },
};

export const SlowDebounced: Story = {
  args: {
    placeHolder: 'Search products...',
    width: 'sm',
    debouncedDelay: 700,
  },
};
