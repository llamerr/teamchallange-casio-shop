import type { Meta, StoryObj } from '@storybook/react';

import { PORTRAIT_IMAGES } from '@/services/api/uploadThingFiles';

import { GenderCard } from './GenderCard';

const meta = {
  title: 'Components/GenderBlock/GenderCard',
  component: GenderCard,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'GenderCard is used inside [GenderBlock](?path=/docs/blocks-genderblock--docs) block.',
      },
    },
  },
} satisfies Meta<typeof GenderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderCardDefault = {
  args: {
    title: 'Women\'s Watches',
    description: 'Hurry, offers end soon!',
    buttonText: 'Shop Now',
    buttonLink: '/collections/womens-watches',
    image: PORTRAIT_IMAGES[1],
  },
  parameters: {
    docs: {
      description: {
        component: 'You can also navigate to the [GenderBlock](?path=/story/Blocks-GenderBlock) from here!',
      },
    },
  },
} satisfies Story;
