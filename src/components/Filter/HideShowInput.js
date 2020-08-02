import React from 'react'
import HideShowIcon from "../Icons/HideShowIcon"
const HideShowInput = () => {
  return (
    <div className="flex text-gray-500">
      <HideShowIcon />
      <div className="ml-2">
        Show : <span className="italic text-gray-700">All</span>
      </div>
    </div>
  )
}

export default HideShowInput

