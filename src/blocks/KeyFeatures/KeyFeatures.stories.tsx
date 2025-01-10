import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { KeyFeatures } from './KeyFeatures';

const meta = {
  title: 'Blocks/KeyFeatures',
  component: KeyFeatures,
  argTypes: {
  },
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
        component: 'KeyFeatures is used on Homepage.',
      },
    },
  },
} satisfies Meta<typeof KeyFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyFeaturesDefault = {
  args: {},
} satisfies Story;
