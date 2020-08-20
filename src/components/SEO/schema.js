const schemaOrgWebPage = ({
  title,
  siteUrl,
  siteLanguage,
  description,
  author,
  buildTime,
  defaultBanner,
}) => ({
  "@context": "http://schema.org",
  "@type": "WebPage",
  url: siteUrl,
  inLanguage: siteLanguage,
  mainEntityOfPage: siteUrl,
  description: description,
  name: title,
  author: {
    "@type": "Person",
    name: author,
  },
  copyrightHolder: {
    "@type": "Person",
    name: author,
  },
  copyrightYear: `${new Date().getFullYear()}`,
  creator: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Person",
    name: author,
  },
  // datePublished: "2019-01-18T10:30:00+01:00",
  dateModified: buildTime,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}${defaultBanner}`,
  },
})
export default schemaOrgWebPage
