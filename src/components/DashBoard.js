import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SearchInput from "./Filter/SearchInput"
import HideShowInput from "./Filter/HideShowInput"
import SortInput from "./Filter/SortInput"
import Table from "../components/Table"
const words = ["yo", "react", "french"]

const hooksSnippet = new Array(10).fill().map(() => {
  return {
    node: {
      frontmatter: {
        name: "useHover",
        stars: Math.floor(Math.random() * 10) + 1,
        description: words[Math.floor(Math.random() * words.length)],
        source: "https://github.com/MattixNow/mattaio-website",
      },
      html: "<p>Hey welcome to the instruction for the useHover hook</p>",
    },
  }
})

const DashBoard = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___stars }) {
        nodes {
          frontmatter {
            title
            stars
            source
            description
          }
          html
          rawMarkdownBody
        }
      }
      site {
        siteMetadata {
          placeholder
        }
      }
    }
  `)
  console.log(data)
  const hooks = data.allMarkdownRemark.nodes
  console.log(hooks)

  const [search, setSearch] = useState("")
  const [filteredStates, setFilteredStates] = useState(hooks)

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = hooks.filter(({ frontmatter: state }) => {
        return (
          state.title.toLowerCase().includes(search.toString()) ||
          state.description.toLowerCase().includes(search.toLowerCase())
        )
      })

      setFilteredStates(filter)
    }, 250)

    return () => clearTimeout(timer)
  }, [search])
  return (
    <div className="w-full">
      <div className="flex justify-between mx-4">
        <div>
          <SearchInput value={search} change={e => setSearch(e)} />
        </div>
        <div className="flex space-x-6">
          <SortInput />
          <HideShowInput />
        </div>
      </div>
      <div>
        <Table hooksList={filteredStates} />
      </div>
    </div>
  )
}

export default DashBoard
