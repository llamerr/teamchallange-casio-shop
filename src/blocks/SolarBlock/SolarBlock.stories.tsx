import type { Meta, StoryObj } from '@storybook/react';

import { SolarBlock } from './SolarBlock';

const meta = {
  title: 'Blocks/SolarBlock',
  component: SolarBlock,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'SolarBlock is used on HomePage.',
      },
    },
  },
} satisfies Meta<typeof SolarBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolarBlockDefault = {} satisfies Story;
