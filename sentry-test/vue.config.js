
const SentryCliPlugin = require('@sentry/webpack-plugin');

const plugins = []
const sentry = new SentryCliPlugin({
  include: './dist/',
  ignoreFile: '.sentrycliignore',
  ignore: ['node_modules', 'webpack.config.js'],
  configFile: 'sentry.properties',
  release: '2.0',
  // urlPrefix: '~/js'
})

if (process.env.NODE_ENV === 'production') {
  plugins.push(sentry)
}
module.exports = {
  configureWebpack: {
    plugins: plugins
  },
  chainWebpack(config) {
    config.devtool('source-map')
  }
}