import * as React from "react"

function SearchIcon(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g
        clipPath="url(#prefix__clip0)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#6B7280"
      >
        <path d="M15.663 15.663a1.5 1.5 0 012.122 0l5.776 5.775a1.5 1.5 0 11-2.122 2.123l-5.774-5.776a1.5 1.5 0 010-2.122h-.002z" />
        <path d="M9.75 18a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5zm9.75-8.25a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SearchIcon
