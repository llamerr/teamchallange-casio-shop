import type { Meta, StoryObj } from '@storybook/react';

import { SimilarProducts } from './SimilarProducts';

const meta = {
  title: 'Blocks/SimilarProducts',
  component: SimilarProducts,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'SimilarProducts is used on HomePage or ProductPage.',
      },
    },
  },
} satisfies Meta<typeof SimilarProducts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimilarProductsDefault = {} satisfies Story;
