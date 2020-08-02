import * as React from "react"

function SortIcon(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 3a.75.75 0 01.75.75v15a.75.75 0 11-1.5 0v-15A.75.75 0 014.5 3z"
        fill="#6B7280"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.031 15.219a.75.75 0 010 1.062l-3 3a.75.75 0 01-1.062 0l-3-3a.75.75 0 111.062-1.062l2.469 2.47 2.469-2.47a.75.75 0 011.062 0zm2.469-.969a.75.75 0 01.75-.75h4.5a.75.75 0 110 1.5h-4.5a.75.75 0 01-.75-.75zm0-4.5a.75.75 0 01.75-.75h7.5a.75.75 0 110 1.5h-7.5a.75.75 0 01-.75-.75zm0-4.5a.75.75 0 01.75-.75h10.5a.75.75 0 110 1.5h-10.5a.75.75 0 01-.75-.75zm0 13.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"
        fill="#6B7280"
      />
    </svg>
  )
}

export default SortIcon
