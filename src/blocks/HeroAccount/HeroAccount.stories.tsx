import type { Meta, StoryObj } from '@storybook/react';

import { HeroAccount } from './HeroAccount';

const meta = {
  title: 'Blocks/HeroAccount',
  component: HeroAccount,
  argTypes: {
    image: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'HeroAccount is used on the Account page.',
      },
    },
  },
} satisfies Meta<typeof HeroAccount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroAccountWithoutImage = {
  args: {
    image: undefined,
  },
} satisfies Story;
