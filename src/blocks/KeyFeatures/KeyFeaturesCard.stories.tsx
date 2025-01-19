import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { KeyFeaturesCard } from './KeyFeaturesCard';

const meta = {
  title: 'Components/KeyFeatures/KeyFeaturesCard',
  component: KeyFeaturesCard,
  argTypes: {
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    description: {
      type: 'string',
      control: { type: 'text' },
    },
    slug: {
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
        component: 'KeyFeaturesCard is used on ProductKeyFeaturess.',
      },
    },
  },
} satisfies Meta<typeof KeyFeaturesCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyFeaturesCardWithImage = {
  args: {
    title: 'G-Shock',
    slug: 'g-shock',
    description: 'Toughness meets bold style',
    image: PORTRAIT_IMAGES[0],
  },
} satisfies Story;

export const KeyFeaturesCardWithoutImage = {
  args: {
    title: 'G-Shock',
    slug: 'g-shock',
    description: 'Toughness meets bold style',
  },
} satisfies Story;

export const KeyFeaturesCardLongTitleAndDescription = {
  args: {
    title: 'G-Shock: The Ultimate in Rugged Timekeeping Technology and Bold Design',
    slug: 'g-shock-the-ultimate-in-rugged-timekeeping-technology-and-bold-design',
    description:
      'Toughness meets bold style. The G-Shock KeyFeatures is for those who refuse to back down from a challenge. With its rugged design and advanced technology, it is the perfect timepiece for those who push themselves to the limit.',
    image: PORTRAIT_IMAGES[1],
  },
} satisfies Story;
