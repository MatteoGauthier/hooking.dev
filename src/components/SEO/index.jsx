import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import schemaOrgWebPage from "./schema"
import OpenGraph from "./OpenGraph"
import Twitter from "./Twitter"
import { lang } from "../../../config/website"
function SEO({ title, desc, banner, pathname, article, node }) {
  const { site } = useStaticQuery(query)
  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      ogLanguage,
      author,
      twitter,
      facebook,
    },
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    // url: `${siteUrl}${pathname || ""}`,
    url: `${siteUrl}`,
  }

  const schema = {
    title: seo.title,
    siteUrl: seo.url,
    siteLanguage,
    description: seo.description,
    author,
    buildTime,
    defaultBanner,
  }
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        <OpenGraph
          desc={seo.description}
          image={seo.image}
          title={seo.title}
          type={article ? "article" : "website"}
          url={seo.url}
          locale={lang}
          name={seo.title}
        />
        <Twitter
          title={seo.title}
          image={seo.image}
          desc={seo.description}
          username={twitter}
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage(schema))}
        </script>
      </Helmet>
    </>
  )
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        placeholder
        defaultTitle:title
        lang
        titleTemplate
        defaultDescription: description
        url
        defaultBanner: image
        author
        twitter: twitterUsername
        keywords
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}
SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}

export default SEO
