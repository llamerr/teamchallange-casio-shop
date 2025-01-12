import type { Meta, StoryObj } from '@storybook/react';

import { KeyFeatures } from './KeyFeatures';

const meta = {
  title: 'Blocks/KeyFeatures',
  component: KeyFeatures,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component: 'KeyFeatures is used on Homepage.',
      },
    },
  },
} satisfies Meta<typeof KeyFeatures>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KeyFeaturesDefault = {
  args: {},
} satisfies Story;
