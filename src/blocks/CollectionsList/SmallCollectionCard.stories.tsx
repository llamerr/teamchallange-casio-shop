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
    href: '/collections/g-shock',
    image: PORTRAIT_IMAGES[0],
  },
} satisfies Story;

export const SmallCollectionCardWithoutImage = {
  args: {
    title: 'G-Shock',
    href: '/collections/g-shock',
  },
} satisfies Story;

export const SmallCollectionCardLongTitleAndDescription = {
  args: {
    title: 'G-Shock: The Ultimate in Rugged Timekeeping Technology and Bold Design',
    href: '/collections/g-shock',
    image: PORTRAIT_IMAGES[1],
  },
} satisfies Story;
