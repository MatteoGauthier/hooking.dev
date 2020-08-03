import React, { useState, useEffect } from "react"
import SearchInput from "./Filter/SearchInput"
import HideShowInput from "./Filter/HideShowInput"
import SortInput from "./Filter/SortInput"
import Table from "../components/Table"

const hooksSnippet = new Array(10).fill().map(() => {
  return {
    name: "useHover",
    stars: Math.floor(Math.random() * 10) + 1,
    description: "Observe mouse enter and leave to element.",
    source: "https://github.com/MattixNow/mattaio-website",
  }
})

const DashBoard = () => {
  const [search, setSearch] = useState("")
  const [filteredStates, setFilteredStates] = useState(hooksSnippet)

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = hooksSnippet.filter(state => {
        return state.stars.toString().includes(search.toString())
      })

      setFilteredStates(filter)
    }, 250)

    return () => clearTimeout(timer)
  }, [search])
  return (
    <div className="w-full">
      <div className="flex justify-between mx-4">
        <div>
          <SearchInput
            value={search}
            change={e => setSearch(e)}
          />
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
