import type { Meta, StoryObj } from '@storybook/react';

import { HeroBanner } from './HeroBanner';

const meta = {
  title: 'Blocks/HeroBanner',
  component: HeroBanner,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'HeroBanner is used on Homepage.',
      },
    },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroBannerDefault = {
  args: {},
} satisfies Story;
