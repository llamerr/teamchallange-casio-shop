import type { Meta, StoryObj } from '@storybook/react';

import { HeroProduct } from './HeroProduct';

const meta = {
  title: 'Blocks/HeroProduct',
  component: HeroProduct,
  argTypes: {
    image: {
      type: 'string',
      control: { type: 'text' },
    },
    title: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'HeroProduct is used on Product page.',
      },
    },
  },
} satisfies Meta<typeof HeroProduct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroProductDefault = {
  args: {
    image: 'https://utfs.io/f/oM0zaDGq1OeYuVvZ45OwsazxZgkH7CmI6byMJqi5WTXrdcl1',
    title: 'Casio G-Shock GA-100',
  },
} satisfies Story;
