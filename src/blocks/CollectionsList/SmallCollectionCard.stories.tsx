import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { SmallCollectionCard } from './SmallCollectionCard';

const meta = {
  title: 'Components/Collections/SmallCollectionCard',
  component: SmallCollectionCard,
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
        component: 'SmallCollectionCard is used on Collection page.',
      },
    },
  },
} satisfies Meta<typeof SmallCollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallCollectionCardWithImage = {
  args: {
    title: 'G-Shock',
    slug: 'g-shock',
    description: 'Toughness meets bold style',
    href: '/collections/g-shock',
    image: PORTRAIT_IMAGES[0],
  },
} satisfies Story;

export const SmallCollectionCardWithoutImage = {
  args: {
    title: 'G-Shock',
    slug: 'g-shock',
    description: 'Toughness meets bold style',
    href: '/collections/g-shock',
  },
} satisfies Story;

export const SmallCollectionCardLongTitleAndDescription = {
  args: {
    title: 'G-Shock: The Ultimate in Rugged Timekeeping Technology and Bold Design',
    slug: 'g-shock-the-ultimate-in-rugged-timekeeping-technology-and-bold-design',
    description:
      'Toughness meets bold style. The G-Shock collection is for those who refuse to back down from a challenge. With its rugged design and advanced technology, it is the perfect timepiece for those who push themselves to the limit.',
    href: '/collections/g-shock',
    image: PORTRAIT_IMAGES[1],
  },
} satisfies Story;
