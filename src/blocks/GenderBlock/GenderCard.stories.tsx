import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { GenderCard } from './GenderCard';

const meta = {
  title: 'Components/GenderBlock/GenderCard',
  component: GenderCard,
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
        component: 'GenderCard is used inside [GenderBlock](?path=/docs/blocks-genderblock--docs) block.',
      },
    },
  },
} satisfies Meta<typeof GenderCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderCardDefault = {
  args: {
    title: 'Women\'s Watches',
    description: 'Hurry, offers end soon!',
    buttonText: 'Shop Now',
    buttonLink: '/collections/womens-watches',
    image: 'https://utfs.io/f/oM0zaDGq1OeY7vfEW4R3RYPkQxf4wdIXz20t9irnvEDTl5bH',
  },
  parameters: {
    docs: {
      description: {
        component: 'You can also navigate to the [GenderBlock](?path=/story/Blocks-GenderBlock) from here!',
      },
    },
  },
} satisfies Story;
