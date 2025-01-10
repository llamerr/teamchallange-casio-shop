import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

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
  tags: ['autodocs'],
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
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
