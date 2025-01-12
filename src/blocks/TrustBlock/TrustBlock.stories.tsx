import type { Meta, StoryObj } from '@storybook/react';

import { TrustBlock } from './TrustBlock';

const meta = {
  title: 'Blocks/TrustBlock',
  component: TrustBlock,
  argTypes: {
    title: {
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
        component: 'TrustBlock is used on HomePage.',
      },
    },
  },
} satisfies Meta<typeof TrustBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrustBlockDefault = {
  args: {
    title: 'Trust',
    description: 'The G-Shock News is for those who refuse to back down from a challenge.',
  },
} satisfies Story;
