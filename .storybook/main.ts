import path from 'path'

import { Configuration } from 'webpack'

type Config = Required<Configuration>

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config: Config) => {
    const configExtensions = config.resolve.extensions
      ? config.resolve.extensions
      : []
    const configmodules = config.resolve.modules ? config.resolve.modules : []
    return {
      ...config,
      plugins: [...config.plugins],
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(ts|tsx)$/,
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  configFile: path.resolve(__dirname, '../', 'babel.config.js'),
                  cacheDirectory: true,
                  compact: true,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        ...config.resolve,
        extensions: [...configExtensions, '.ts', '.tsx'],
        modules: [...configmodules, path.resolve(__dirname, '../', 'src')],
      },
    }
  },
}
