const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },

  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: '_' // indicates global variable
      }
    }
  }
};
