import type { Meta, StoryObj } from '@storybook/react';

import { NewsCardSkeleton } from './NewsCardSkeleton';

const meta = {
  title: 'Components/News/NewsCardSkeleton',
  component: NewsCardSkeleton,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'NewsCardSkeleton is used on NewsBlock.',
      },
    },
  },
} satisfies Meta<typeof NewsCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsCardSkeletonDefault = {
  args: {},
} satisfies Story;
