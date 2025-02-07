import type { Meta, StoryObj } from '@storybook/react';

import { CookieConsent } from './CookieConsent';

const meta = {
  title: 'Components/CookieConsent',
  component: CookieConsent,
  argTypes: {
    initialState: {
      type: 'string',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 550,
      },
      description: {
        component: 'CookieConsent is used in ShopTemplate.',
      },
    },
  },
} satisfies Meta<typeof CookieConsent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CookieConsentClosed = {
  args: {
    initialState: 'false',
  },
} satisfies Story;

export const CookieConsentOpened = {
  args: {
    initialState: 'true',
  },
} satisfies Story;
