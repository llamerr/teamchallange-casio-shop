import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { CollectionCard } from './CollectionCard';

const meta = {
  title: 'Blocks/ProductCollections',
  component: CollectionCard,
  argTypes: {
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    slogan: {
      type: 'string',
      control: { type: 'text' },
    },
    href: {
      type: 'string',
      control: { type: 'text' },
    },
    image: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'ProductCollections is used on ProductPage.',
      },
    },
  },
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollectionCardWithImage = {
  args: {
    title: 'G-Shock',
    slug: 'g-shock',
    slogan: 'Toughness meets bold style',
    href: '/collections/g-shock',
    image: PORTRAIT_IMAGES[0],
  },
} satisfies Story;
