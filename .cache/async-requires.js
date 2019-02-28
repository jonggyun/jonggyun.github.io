// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-pages-about-js": () => import("/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-pages-404-js": () => import("/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jonggyunpark/Documents/githubio/jonggyun.github.io/.cache/data.json")

