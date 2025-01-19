import type { Meta, StoryObj } from '@storybook/react';

import type { ProductDetailsDTO } from '@/services/api/dto/Product.dto';
import { detailedProducts } from '@/services/api/dto/Product.mock';

import { ProductTabs } from './ProductTabs';

const meta = {
  title: 'Blocks/ProductTabs',
  component: ProductTabs,
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
      table: {
        category: 'props',
      },
      description: 'Product details data',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'ProductTabs is used on Product page.',
      },
    },
  },
} satisfies Meta<typeof ProductTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductTabsDefault = {
  args: {
    data: detailedProducts[0] as ProductDetailsDTO,
  },
} satisfies Story;
