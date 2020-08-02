import React from "react"
import SearchIcon from "../Icons/SearchIcon"
const SearchInput = () => {
  return (
    <div className="flex flex-row p-2 border rounded-lg">
      <SearchIcon />
      <input
        type="text"
        className="ml-2 font-medium text-gray-800 placeholder-opacity-50 font-display focus:outline-none"
        placeholder="Search for a hook"
        name="cc"
        id="cc"
      />

    </div>
  )
}

export default SearchInput
