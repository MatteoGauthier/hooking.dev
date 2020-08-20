import * as React from "react"

function LikeIcon(props) {
  return (
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-heart"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M12 20l-7-7a4 4 0 016.5-6 .9.9 0 001 0 4 4 0 016.5 6l-7 7" />
    </svg>
  )
}

export default LikeIcon
