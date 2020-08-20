/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require("./config/website")
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: config.siteUrl,
    placeholder: true,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    titleTemplate: config.siteTitleTemplate,
    description: config.siteDescription,
    keywords: config.keywords,
    lang: config.lang,
    // canonicalUrl: siteUrl,
    url: "https://hooking.now.sh", // No trailing slash allowed!
    image: "/images/website.jpg", // Path to your image you placed in the 'static' folder
    author: config.author,
    organization: {
      name: config.organization,
    },
    twitterUsername: config.twitterHandle,
    twitterHandle: config.twitterHandle,
    social: {
      instagram: config.instagramHandle,
      twitter: config.twitterHandle,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        icon: 'src/assets/' + config.siteLogo,
      },
    },
    // Tailwind integrate it
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
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
    `gatsby-plugin-react-helmet`,
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
    "gatsby-plugin-sitemap",
  ],
}
