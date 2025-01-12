import type { Meta, StoryObj } from '@storybook/react';

import { CollectionCard } from './CollectionCard';

const meta = {
  title: 'Components/Collections/CollectionCard',
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
        component: 'CollectionCard is used on ProductCollections.',
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

export const CollectionCardWithoutImage = {
  args: {
    title: 'G-Shock',
    description: 'Toughness meets bold style',
    href: '/collections/g-shock',
  },
} satisfies Story;

export const CollectionCardLongTitleAndDescription = {
  args: {
    title: 'G-Shock: The Ultimate in Rugged Timekeeping Technology and Bold Design',
    description:
      'Toughness meets bold style. The G-Shock collection is for those who refuse to back down from a challenge. With its rugged design and advanced technology, it is the perfect timepiece for those who push themselves to the limit.',
    href: '/collections/g-shock',
    image: 'https://utfs.io/f/oM0zaDGq1OeYGkWs1dI08fdOtvRu97WAj52QYbrI6VEZSXek',
  },
} satisfies Story;
