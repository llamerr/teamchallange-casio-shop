import type { Meta, StoryObj } from '@storybook/react';

import { FilteredProductsList } from './FilteredProductsList';

const meta = {
  title: 'Blocks/FilteredProductsList',
  component: FilteredProductsList,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'FilteredProductsList is used on Collection page.',
      },
    },
  },
} satisfies Meta<typeof FilteredProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilteredProductsListDefault = {} satisfies Story;
