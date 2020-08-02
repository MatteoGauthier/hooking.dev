import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Cards/Card"

const hooksSnippet = {
  name: "useHover",
  stars: 128,
  description: "Observe mouse enter and leave to element.",
  source: "https://github.com/MattixNow/mattaio-website",
}

const Table = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___stars }) {
        edges {
          node {
            frontmatter {
              title
              stars
              source
              description
            }
          }
        }
      }
      site {
        siteMetadata {
          placeholder
        }
      }
    }
  `)
  return (
    <div className="grid grid-cols-4 row-gap-3 col-gap-5 mt-3">
      {data.site.siteMetadata.placeholder
        ? new Array(10)
            .fill(hooksSnippet)
            .map(e => (
              <Card
                name={e.name}
                stars={e.stars}
                desc={e.description}
                source={e.source}
              />
            ))
        : data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => (
            <Card
              name={frontmatter.title}
              stars={frontmatter.stars}
              desc={frontmatter.description}
              source={frontmatter.source}
            />
          ))}
    </div>
  )
}

export default Table
