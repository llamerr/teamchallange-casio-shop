import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { NewsCard } from './NewsCard';

const meta = {
  title: 'Components/News/NewsCard',
  component: NewsCard,
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
        component: 'NewsCard is used on NewsBlock.',
      },
    },
  },
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsCardWithImage = {
  args: {
    title: 'G-Shock',
    description: 'Toughness meets bold style',
    href: '/News/g-shock',
    image: PORTRAIT_IMAGES[0],
  },
} satisfies Story;

export const NewsCardWithoutImage = {
  args: {
    title: 'G-Shock',
    description: 'Toughness meets bold style',
    href: '/News/g-shock',
  },
} satisfies Story;

export const NewsCardLongTitleAndDescription = {
  args: {
    title: 'G-Shock: The Ultimate in Rugged Timekeeping Technology and Bold Design',
    description:
      'Toughness meets bold style. The G-Shock News is for those who refuse to back down from a challenge. With its rugged design and advanced technology, it is the perfect timepiece for those who push themselves to the limit.',
    href: '/News/g-shock',
    image: PORTRAIT_IMAGES[1],
  },
} satisfies Story;
