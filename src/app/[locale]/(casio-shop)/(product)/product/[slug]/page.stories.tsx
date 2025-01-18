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
        + '- [ProductBanner](?path=/docs/blocks-productbanner--docs)<br/>'
        + '- [Breadcrumbs](?path=/docs/blocks-breadcrumbs--docs)<br/>'
        + '- [ProductCollections](?path=/docs/blocks-productcollections--docs)<br/>'
        + '- [NewArrivals](?path=/docs/blocks-newarrivals--docs)<br/>'
        + '- [SolarBlock](?path=/docs/blocks-solarblock--docs)<br/>'
        + '- [NewsBlock](?path=/docs/blocks-newsblock--docs)',
      },
    },
  },
} satisfies Meta<React.FC>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductPageDefault = {
  args: {},
} satisfies Story;
