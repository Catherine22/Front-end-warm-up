const { Nuxt, Builder } = require('nuxt');

const app = require('express')();
const isProd = process.env.NODE_ENV === 'production';

// We instantiate Nuxt.js with the options
const config = require('../nuxt.config.js');
config.dev = !isProd;
const nuxt = new Nuxt(config);
const { host, port } = nuxt.options.server;

// Render every route with Nuxt.js
app.use(nuxt.render);

// Build only in dev mode with hot-reloading
if (config.dev) {
    new Builder(nuxt).build().then(listen);
} else {
    listen();
}

function listen() {
    // Listen the server
    app.listen(port, host);
    console.log(`Server listening on http://${host}:${port}`);
}