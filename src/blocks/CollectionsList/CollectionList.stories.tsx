import type { Meta, StoryObj } from '@storybook/react';

import { CollectionList } from './CollectionList';

const meta = {
  title: 'Blocks/CollectionList',
  component: CollectionList,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component:
        'CollectionList is used on [Collections page](?path=/docs/pages-collectionspage--docs).<br/>'
        + 'It consists of [SmallCollectionCard](?path=/docs/components-collections-smallcollectioncard--docs) components.<br/>'
        + 'It does not have any props, but uses data loaded from useCollections hook that loads /api/collections.',
      },
    },
  },
} satisfies Meta<typeof CollectionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollectionListDefault = {
  args: {
  },
} satisfies Story;
