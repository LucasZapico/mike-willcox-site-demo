module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@LucasZapico",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-scroll-indicator",
      options: {
        // Configure color of the scroll indicator
        color: "#f08971",
        // Height of the scroll indicator
        height: "3px",
        // Configure paths where the scroll indicator will appear
        paths: ["/", "/blog/**"],
        // Configure the z-index of the indicator element
        zIndex: "9999",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
