import '../src/styles/global.css';

import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

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
  },
};

export default preview;
