import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/CollectionsPage',
  component: () => null,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component:
        'Collections page show details about multiple product based on active filter.<br/>'
        + 'It include these components:<br/>'
        + '- [HeroCollection](?path=/docs/blocks-herocollection--docs)<br/>'
        + '- [Breadcrumbs](?path=/docs/blocks-breadcrumbs--docs)<br/>'
        + '- [CollectionList](?path=/docs/blocks-collectionlist--docs)<br/>'
        + '- [FilteredProductsList](?path=/docs/blocks-filteredproductslist--docs)<br/>',
      },
    },
  },
} satisfies Meta<React.FC>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductPageDefault = {
  args: {},
} satisfies Story;
