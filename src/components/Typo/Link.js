import React from "react"

const Link = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-700 font-display">
      {children} →
    </a>
  )
}

export default Link
