/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules"],
      alias: {
        TweenLite: "gsap/src/minified/TweenLite.min.js",
        TweenMax: "gsap/src/minified/TweenMax.min.js",
        TimelineLite: "gsap/src/minified/TimelineLite.min.js",
        TimelineMax: "gsap/src/minified/TimelineMax.min.js",
        ScrollMagic: "scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
        "animation.gsap":
          "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
        "debug.addIndicators":
          "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js",
      },
    },
  })
}
