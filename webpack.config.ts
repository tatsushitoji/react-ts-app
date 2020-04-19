import path from 'path'

import { ConfigurationFactory, Configuration } from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const webpackConfig: ConfigurationFactory = (_env, { mode }) => {
  const productionMode = mode === 'production'
  const base: Configuration = {
    entry: './src/index.tsx',

    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname)],
          exclude: [/node_modules/],
          options: {
            cacheDirectory: true,
            envName: mode || 'development',
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
      }),
    ],

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  }

  const development = merge(base, {
    devtool: 'inline-source-map',
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    devServer: {
      stats: { colors: true },
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  })

  const production = merge(base, {
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  })

  const config = productionMode ? production : development
  return config
}

// eslint-disable-next-line import/no-default-export
export default webpackConfig
