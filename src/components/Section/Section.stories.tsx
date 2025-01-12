import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

const meta = {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    title: {
      type: 'string',
      control: { type: 'text' },
    },
    link: {
      control: { type: 'object' },
      fields: {
        href: { type: 'string', control: { type: 'text' } },
        label: { type: 'string', control: { type: 'text' } },
      },
    },
    children: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Section is used to create section block.',
      },
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionDefault = {
  args: {
    title: 'Section title',
    link: {
      href: '#',
      label: 'Section link',
    },
    children: 'Section content',
  },
} satisfies Story;
