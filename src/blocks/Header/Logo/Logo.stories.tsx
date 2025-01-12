import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'Components/Header/Logo',
  component: Logo,
  argTypes: {
    variant: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Logo is used on Header.',
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoDark = {
  args: {
    variant: 'dark',
  },
} satisfies Story;

export const LogoLight = {
  args: {
    variant: 'light',
  },
} satisfies Story;
