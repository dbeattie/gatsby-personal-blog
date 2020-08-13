const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/pages/404.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/pages/thanks.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/templates/about-page.js"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/templates/blog-list.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/templates/blog-post.js"))),
  "component---src-templates-contact-page-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/templates/contact-page.js"))),
  "component---src-templates-index-page-js": hot(preferDefault(require("/Users/darrenbeattie/deployed-websites/gatsby-personal-blog/src/templates/index-page.js")))
}

