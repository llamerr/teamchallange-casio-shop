import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    'storybook-dark-mode',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: { useSWC: true },
    },
  },

  staticDirs: ['../public'],

  core: {
    disableTelemetry: true,
  },

  features: {
    viewportStoryGlobals: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  webpackFinal: async (config) => {
    if (config.resolve === undefined) {
      config.resolve = {};
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      'next/router': 'next-router-mock',
    };
    return config;
  },
};

export default config;
