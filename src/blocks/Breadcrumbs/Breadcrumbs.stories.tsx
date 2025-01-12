import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Blocks/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs is used on all pages.',
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbsDefault = {
  args: {},
} satisfies Story;
