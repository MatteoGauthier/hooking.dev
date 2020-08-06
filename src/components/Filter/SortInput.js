import React from "react"
import SortIcon from "../Icons/SortIcon"
const SortInput = () => {
  return (
    <div className="flex text-gray-500">
      <SortIcon />
      <div className="ml-2">
        Sort by <span className="italic text-gray-700">Popularity</span>
      </div>
    </div>
  )
}

export default SortInput
