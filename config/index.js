'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
//定义访问接口路径,vue文件中使用定义变量代替
var ESData = 'http://192.168.8.123:9000'; //es数据接口
var YDH = 'http://money.finance.sina.com.cn'; //es数据接口

var test = 'http://192.168.8.121:8080';//其他接口

const path = require('path');

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/ESData': {
        target: ESData,
        changeOrigin: true,
        pathRewrite: {
            '^/ESData': '',
        },

      },
      '/test': {
        target: test,
        changeOrigin: true,
        pathRewrite: {
            '^/test': '',
        },

      },
      '/YDH': {
        target: YDH,
        changeOrigin: true,
        pathRewrite: {
          '^/YDH': '',
        },

      }


    },

    // Various Dev Server settings
    // host: 'localhost', // can be overwritten by process.env.HOST
    host: '127.0.0.1', // can be overwritten by process.env.HOST
    // port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    port: 3000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
