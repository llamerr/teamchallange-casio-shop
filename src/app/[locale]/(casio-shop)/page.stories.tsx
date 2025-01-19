import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/HomePage',
  component: () => null,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component:
        'Homepage is the main page of the website. It include these components:<br/>'
        + '- [HeroBanner](?path=/docs/blocks-herobanner--docs)<br/>'
        + '- [TrustBlock](?path=/docs/blocks-trustblock--docs)<br/>'
        + '- [GenderBlock](?path=/docs/blocks-genderblock--docs)<br/>'
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

export const HomePageDefault = {
  args: {},
} satisfies Story;
