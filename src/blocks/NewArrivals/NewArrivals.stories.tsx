import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { NewArrivals } from './NewArrivals';

const meta = {
  title: 'Blocks/NewArrivals',
  component: NewArrivals,
  argTypes: {},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
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
