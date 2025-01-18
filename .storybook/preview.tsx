import '@/styles/global.css';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { NextIntlClientProvider } from 'next-intl';
import React from 'react';

import { QueryProvider } from '@/components/query-providers';
import messages from '@/locales/en.json';
import { mockHandlers } from '@/services/api/mockHandlers';

// Initialize MSW
initialize({}, [
  ...mockHandlers,
]);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    darkMode: {
      current: 'dark',
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' },
      classTarget: 'html',
      stylePreview: true,
    },
    layout: 'fullscreen',
    docs: {
      story: {
        inline: true,
        iframeHeight: 500,
      },
    },
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
  },

  loaders: [mswLoader],

  decorators: [
    Story => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <QueryProvider>
          <Story />
        </QueryProvider>
      </NextIntlClientProvider>
    ),
  ],

  initialGlobals: {
    viewport: { value: 'mobile1', isRotated: false },
  },

  tags: ['autodocs'],
};

export default preview;
