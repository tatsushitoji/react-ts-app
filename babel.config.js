module.exports = {
  presets: [
    '@babel/react',
    '@babel/typescript',
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        targets: ['> 1%, last 2 versions, ie >= 11, not dead'],
      },
    ],
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
}
