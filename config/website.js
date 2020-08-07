module.exports = {
  siteTitle: "Hooking.dev - Collection of react hooks", // Navigation and Site Title
  siteTitleShort: "Hooking.dev", // short_name for manifest
  siteUrl: process.env.ROOT_URL || "https://hooking.now.sh", // Domain of your site. No trailing slash!
  siteTitleTemplate: "%s · Hookin.dev - Collection of react hooks",
  lang: "en", // Language Tag on <html> element
  pathPrefix: "/",
  siteLogo: "images/logo.png", // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    "Here is a collection of different utility hooks for your next projects ! Hooks presented here are lightweight and scoped, thanks to treeshaking export..",

  keywords: [
    "react hooks",
    "react",
    "react hooks list",
    "hooks list",
    "react hooks collection",
  ],
  // minibio: `
  //   <strong>Kent C. Dodds</strong> is a JavaScript software engineer and
  //   teacher. He's taught hundreds of thousands of people how to make the world
  //   a better place with quality software development tools and practices. He
  //   lives with his wife and four kids in Utah.
  // `,
  author: "Mattèo Gauthier", // Author for schemaORGJSONLD
  organization: "squale.agency",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@MattixNow", // Twitter Username
  ogSiteName: "Hooking.dev", // Facebook Site Name

  // Manifest and Progress color
  themeColor: "#003f6c",
  backgroundColor: "#e4f1fc",

  // Social component
  twitter: "https://twitter.com/MattixNow/",
  twitterHandle: "@MattixNow",
  instagramHandle: "@matteo.gauthier_",
  github: "https://github.com/MatteoGauthier/",
  linkedin: "https://www.linkedin.com/in/MatteoGauthier/",
}
