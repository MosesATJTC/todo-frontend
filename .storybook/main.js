const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@assets': path.resolve(__dirname, '../assets'),
      '@config': path.resolve(__dirname, '../utils/config.ts'),
      'next-i18next': path.resolve(__dirname, '../next-i18next.config.js'),
    };
    return config;
  },
  stories: [
    '../components/**/stories.mdx',
    '../components/**/stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
