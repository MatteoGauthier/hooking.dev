/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    placeholder: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hooks-content`,
        path: `${__dirname}/content/hooks`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Rubik",
            weights: ["400", "500"],
          },
          {
            family: "Source Code Pro",
            weights: ["400", "700"],
          },
          {
            family: "Inter",
            weights: ["500", "400", "700"],
          },
        ],
      },
    },
  ],
}
