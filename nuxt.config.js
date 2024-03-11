export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Escola',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/dayjs',
    '@/plugins/vtooltip',
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',

    //COOKIES
     // Simple usage
  //  'cookie-universal-nuxt',
    // With options
    ['cookie-universal-nuxt', { parseJSON: false }],
  ],

//config para cookie
 ssr: true,
 target: 'server',

  //CHAMADA DE MIDDLEWARES
 router:{
    middleware:'isAuthenticated'
  },

 server: {
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  /*auth: {
    // Options
     strategies: {

      local: {
//      scheme: "refresh",
        token: {
          property: "token", //property name that the Back-end sends for you as a access token for saving on localStorage and cookie of user browser
          global: true,
          required: true,
          type: "Bearer"
        },

        user: {
          property: "user",
          autoFetch: true
        },

//      refreshToken: {  // it sends request automatically when the access token expires, and its expire time has set on the Back-end and does not need to we set it here, because is useless
//        property: "refresh_token", // property name that the Back-end sends for you as a refresh token for saving on localStorage and cookie of user browser
//        data: "refresh_token", // data can be used to set the name of the property you want to send in the request.
//      },

        endpoints: {
        //  login: { url: "/api/auth/login", method: "post" },
        //  refresh: { url: "/api/auth/refresh-token", method: "post" },
          logout: false, //  we don't have an endpoint for our logout in our API and we just remove the token from localstorage
          user: { url: "/api/auth/user", method: "get" }
        }

      }
    }
  },
*/

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
   // baseURL: '/',
    baseURL: "http://172.28.3.31:5000"
   // proxy: true
  },

//  proxy: {
//     '/api/': 'http://api.example.com',
//     '/api2/': 'http://api.another-website.com'
//   }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
