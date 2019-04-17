/**
 * https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill
 */
const utils = require('./scripts/utils')

const pages = utils.generatePages('./src/views/**?/app.js');

module.exports = {
  pages,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  pwa: {
    name: 'xxqg',
  },

  // https://cli.vuejs.org/zh/guide/browser-compatibility.html#polyfill
  transpileDependencies: [],

  assetsDir: 'assets',
  productionSourceMap: false,

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: '@import "~@/styles/variables.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));
  },
};
