import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Cards/Card"


const Table = ({hooksList}) => {
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
      {hooksList &&
        hooksList.map((e, index) => (
          <Card
            key={index}
            name={e.name}
            stars={e.stars}
            desc={e.description}
            source={e.source}
          />
        ))}
    </div>
  )
}

export default Table
