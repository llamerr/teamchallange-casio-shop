import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { HeroBanner } from './HeroBanner';

const meta = {
  title: 'Blocks/HeroBanner',
  component: HeroBanner,
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
        component: 'HeroBanner is used on Homepage.',
      },
    },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroBannerDefault = {
  args: {},
} satisfies Story;
