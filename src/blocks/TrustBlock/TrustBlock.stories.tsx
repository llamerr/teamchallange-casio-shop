import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { TrustBlock } from './TrustBlock';

const meta = {
  title: 'Blocks/TrustBlock',
  component: TrustBlock,
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
        component: 'TrustBlock is used on HomePage.',
      },
    },
  },
} satisfies Meta<typeof TrustBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrustBlockDefault = {} satisfies Story;
