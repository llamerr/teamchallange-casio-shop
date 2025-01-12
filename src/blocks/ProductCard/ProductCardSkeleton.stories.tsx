import type { Meta, StoryObj } from '@storybook/react';

import { ProductCardSkeleton } from './ProductCardSkeleton';

const meta = {
  title: 'Components/Products/ProductCardSkeleton',
  component: ProductCardSkeleton,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'ProductCardSkeleton is a loader for [ProductCard](?path=/docs/components-genderblock-gendercard--docs).',
      },
    },
  },
} satisfies Meta<typeof ProductCardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardSkeletonDefault = {} satisfies Story;
