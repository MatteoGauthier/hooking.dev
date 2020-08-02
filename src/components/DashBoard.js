import React from "react"
import SearchInput from "./Filter/SearchInput"
import HideShowInput from "./Filter/HideShowInput"
import SortInput from "./Filter/SortInput"
const Table = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mx-4">
        <div>
          <SearchInput />
        </div>
        <div className="flex space-x-6">
          <SortInput />
          <HideShowInput />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Table
