import type { Meta, StoryObj } from '@storybook/react';

import { GenderBlock } from './GenderBlock';

const meta = {
  title: 'Blocks/GenderBlock',
  component: GenderBlock,
  argTypes: {
  },
  parameters: {
    docs: {
      description: {
        component:
        'GenderBlock is used on Homepage.<br/>'
        + 'GenderBlock uses [GenderCard](?path=/docs/components-genderblock-gendercard--docs) component.',
      },
    },
  },
} satisfies Meta<typeof GenderBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderBlockDefault = {
  args: {},
} satisfies Story;
