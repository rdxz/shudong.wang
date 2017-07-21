const path = require('path')
const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    },
    extend (webpackConfig, { dev, isClient, isServer }) {
      webpackConfig.module.rules.push({
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      })
    }
  },
  // plugins: [
  //   // {src: '~/plugins/jquery', ssr: false}
  // ],
  css: [
    // /bootstrap/dist/css/bootstrap.css
    // 'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/css/bootstrap.css'
    // { src: '~assets/sass/app.scss', lang: 'sass' }
    // {src: 'bootstrap', lang: 'css'}
  ]
}
