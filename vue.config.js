'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const {
  extendDefaultPlugins
} = require('svgo')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 3030,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(options => ({
        ...options,
        plugins: [{
          removeAttrs: {
            attrs: 'fill'
          }
        }]
      }))
      .end()
  }
}