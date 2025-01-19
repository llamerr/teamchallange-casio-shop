import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/ProductPage',
  component: () => null,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component:
        'Product page show details about single product. It include these components:<br/>'
        + '- [HeroProduct](?path=/docs/blocks-heroproduct--docs)<br/>'
        + '- [Breadcrumbs](?path=/docs/blocks-breadcrumbs--docs)<br/>'
        + '- [ProductTabs](?path=/docs/blocks-producttabs--docs)<br/>'
        + '- [ProductGallery](?path=/docs/blocks-productgallery--docs)<br/>'
        + '- [KeyFeatures](?path=/docs/blocks-keyfeatures--docs)<br/>'
        + '- [SimilarProducts](?path=/docs/blocks-similarproducts--docs)',
      },
    },
  },
} satisfies Meta<React.FC>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductPageDefault = {
  args: {},
} satisfies Story;
