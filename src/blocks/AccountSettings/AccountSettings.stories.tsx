import type { Meta, StoryObj } from '@storybook/react';

import { AccountSettings } from './AccountSettings';

const meta = {
  title: 'Blocks/AccountSettings',
  component: AccountSettings,
} satisfies Meta<typeof AccountSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountSettingsDefault = {} satisfies Story;
