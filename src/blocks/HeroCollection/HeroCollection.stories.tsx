import type { Meta, StoryObj } from '@storybook/react';

import { LANDSCAPE_IMAGES } from '@/services/api/uploadThingFiles';

import { HeroCollection } from './HeroCollection';

const meta = {
  title: 'Blocks/HeroCollection',
  component: HeroCollection,
  argTypes: {
    image: {
      type: 'string',
      control: { type: 'text' },
    },
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    collection: {
      type: 'string',
      control: { type: 'text' },
    },
    description: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'HeroCollection is used on Collection page.',
      },
    },
  },
} satisfies Meta<typeof HeroCollection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroCollectionDefault = {
  args: {
    image: LANDSCAPE_IMAGES[0],
    title: 'Casio G-Shock GA-100',
    collection: 'G-Shock',
    description: 'Toughness meets bold style',
  },
} satisfies Story;
