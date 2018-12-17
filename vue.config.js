const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/globals.scss";`,
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end();
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
      }),
    ],
  },
};
