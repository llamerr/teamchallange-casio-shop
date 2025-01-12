import type { Meta, StoryObj } from '@storybook/react';

import { CollectionCardSkeleton } from './CollectionCardSkeleton';

const meta = {
  title: 'Components/Collections/CollectionCardSkeleton',
  component: CollectionCardSkeleton,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'CollectionCardSkeleton is used on ProductCollections.',
      },
    },
  },
} satisfies Meta<typeof CollectionCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollectionCardSkeletonDefault = {
  args: {},
} satisfies Story;
