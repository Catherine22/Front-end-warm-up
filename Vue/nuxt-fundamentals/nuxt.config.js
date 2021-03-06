/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css', 'assets/css/style.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/element-ui', '@/plugins/api'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/eslint-module'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        extend(config, ctx) {}
    }
};
