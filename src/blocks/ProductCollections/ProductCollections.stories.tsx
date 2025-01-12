import type { Meta, StoryObj } from '@storybook/react';

import { CollectionCard } from './CollectionCard';

const meta = {
  title: 'Blocks/ProductCollections',
  component: CollectionCard,
  argTypes: {
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    description: {
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
    description: 'Toughness meets bold style',
    href: '/collections/g-shock',
    image: 'https://utfs.io/f/oM0zaDGq1OeYGkWs1dI08fdOtvRu97WAj52QYbrI6VEZSXek',
  },
} satisfies Story;
