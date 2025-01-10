import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { GenderBlock } from './GenderBlock';

const meta = {
  title: 'Blocks/GenderBlock',
  component: GenderBlock,
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
        component: 'GenderBlock uses [GenderCard](?path=/docs/components-genderblock-gendercard--docs) component.',
      },
    },
  },
} satisfies Meta<typeof GenderBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderBlockDefault = {
  args: {},
} satisfies Story;
