module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'yellowroad_vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: "auth_cookie_to_store"
  },
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "http://localhost:8080/api",
    browserBaseURL: "http://localhost:8080/api",
    debug: true,
    // proxyHeaders: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, ctx) {
  //     if (ctx.dev && ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}
