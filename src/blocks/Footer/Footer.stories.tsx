import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Blocks/Footer',
  component: Footer,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'Footer is used on all pages.',
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterDefault = {
  args: {},
} satisfies Story;
