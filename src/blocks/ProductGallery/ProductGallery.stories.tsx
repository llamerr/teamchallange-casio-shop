import type { Meta, StoryObj } from '@storybook/react';

import { detailedProducts } from '@/services/api/dto/Product.mock';

import { type GalleryImage, ProductGallery } from './ProductGallery';

const meta = {
  title: 'Blocks/ProductGallery',
  component: ProductGallery,
  argTypes: {
    images: {
      type: 'string',
      control: {
        type: 'object',
      },
      table: {
        category: 'props',
      },
      description: 'Gallery images data',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ProductGallery is used on [Product page](?path=/docs/pages-productpage--docs).',
      },
    },
  },
} satisfies Meta<typeof ProductGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductGalleryDefault = {
  args: {
    images: detailedProducts[2]?.images as GalleryImage[],
  },
} satisfies Story;
