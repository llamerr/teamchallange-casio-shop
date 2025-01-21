import type { Meta, StoryObj } from '@storybook/react';

import { KeyFeatures as features } from '@/services/api/dto/KeyFeature/KeyFeature.mock';

import { KeyFeatures } from './KeyFeatures';

const meta = {
  title: 'Blocks/KeyFeatures',
  component: KeyFeatures,
  argTypes: {
    features: {
      type: 'string',
      control: { type: 'object' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'KeyFeatures is used on [Product page](?path=/docs/pages-productpage--docs).',
      },
    },
  },
} satisfies Meta<typeof KeyFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyFeaturesDefault = {
  args: {
    features,
  },
} satisfies Story;
