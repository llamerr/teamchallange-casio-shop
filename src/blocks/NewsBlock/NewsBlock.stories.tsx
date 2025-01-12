import type { Meta, StoryObj } from '@storybook/react';

import { NewsBlock } from './NewsBlock';

const meta = {
  title: 'Blocks/NewsBlock',
  component: NewsBlock,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'NewsBlock is used on HomePage.',
      },
    },
  },
} satisfies Meta<typeof NewsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrustBlockDefault = {} satisfies Story;
