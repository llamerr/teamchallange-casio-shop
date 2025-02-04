import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

const children = (
  <>
    <p>Child 1</p>
    <p>Child 2</p>
    <p>Child 3</p>
    <p>Child 4</p>
  </>
);

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    isLoading: { type: 'boolean', control: { type: 'boolean' } },
    renderSkeleton: { type: 'function' },
    skeletonCount: { type: 'number', control: { type: 'number' } },
    className: { type: 'string', control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    children,
    className: 'grid-cols-4 gap-6',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    renderSkeleton: key => <p key={key}>Skeleton</p>,
    skeletonCount: 4,
    children,
    className: 'grid-cols-4 gap-6',
  },
};
