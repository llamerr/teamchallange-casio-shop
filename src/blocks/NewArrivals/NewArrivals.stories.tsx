import type { Meta, StoryObj } from '@storybook/react';

import { NewArrivals } from './NewArrivals';

const meta = {
  title: 'Blocks/NewArrivals',
  component: NewArrivals,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'NewArrivals is used on HomePage or ProductPage.',
      },
    },
  },
} satisfies Meta<typeof NewArrivals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewArrivalsDefault = {} satisfies Story;
