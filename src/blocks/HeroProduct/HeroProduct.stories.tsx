import type { Meta, StoryObj } from '@storybook/react';

import { HeroProduct } from './HeroProduct';

const meta = {
  title: 'Blocks/Product/HeroProduct',
  component: HeroProduct,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'HeroProduct is used on Product page.',
      },
    },
  },
} satisfies Meta<typeof HeroProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroProductDefault = {
  args: {},
} satisfies Story;
