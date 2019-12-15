const withSass = require('@zeit/next-sass');
const sitemap = require('nextjs-sitemap-generator');

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/'},
    }
  }
});

sitemap({
  baseUrl: 'http://localhost:3000',
  pagesDirectory: __dirname + "/pages",
  targetDirectory: 'static/'
});