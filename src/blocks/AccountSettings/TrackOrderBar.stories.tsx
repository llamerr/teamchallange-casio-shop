import type { Meta, StoryObj } from '@storybook/react';

import { TrackOrderBar } from './TrackOrderBar';

const meta = {
  title: 'Components/AccountSettings/TrackOrderBar',
  component: TrackOrderBar,
} satisfies Meta<typeof TrackOrderBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrackOrderBarDefault = {} satisfies Story;
