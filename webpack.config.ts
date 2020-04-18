const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')

// @ts-ignore
module.exports = (_, { mode }: { mode: string }) => {
  const productionMode = mode === 'production'
  const base = {
    entry: './src/index.tsx',

    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'babel-loader' },
        // {
        //   test: /\.(sa|sc|c)ss$/,
        //   use: [
        //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     'css-loader',
        //   ],
        // },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [{
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: 'fonts',
        //     }
        //   }]
        // }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
      }),
      // new MiniCssExtractPlugin({
      //   filename: devMode ? '[name].css' : '[name].[hash].css',
      //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      // }),
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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      stats: { colors: true },
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
  })

  const production = merge(base, {
    // plugins: [
    //   new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    // ],
    // performance: {
    //   hints: false
    // },
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  })

  const config = productionMode ? production : development
  return config
}
