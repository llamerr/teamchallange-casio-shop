import type { Meta, StoryObj } from '@storybook/react';

import { SettingsTab } from './SettingsTab';

const meta = {
  title: 'Components/AccountSettings/SettingsTab',
  component: SettingsTab,
  argTypes: {
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof SettingsTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SettingsTabDefault = {
  args: {
    children: 'Profile',
    href: '',
  },
} satisfies Story;

export const SettingsTabHighlighted = {
  args: {
    children: 'Profile',
    href: '/',
  },
} satisfies Story;
