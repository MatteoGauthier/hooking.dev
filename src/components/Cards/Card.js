import React from "react"

import StarIcon from "../Icons/StarIcon"
import HeartIcon from "../Icons/HeartIcon"

const cardStyle = {
  height: "148px",
}

const Card = ({ name, stars, desc, source }) => {
  return (
    <div
      style={cardStyle}
      className="flex flex-col justify-between w-full px-4 py-3 font-mono rounded-lg shadow bg-dark-violet"
    >
      <div>
        <div className="flex justify-between mb-3 font-bold">
          <span className="text-lg text-bright-green">{name}<span>()</span></span>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1 text-bright-yellow">
              <StarIcon />
              <span>{stars}</span>
            </div>
            <div className="flex items-center space-x-1 text-bright-red">
              <HeartIcon />
              <span>112</span>
            </div>
          </div>
        </div>
        <p className="text-soft-violet">{desc}</p>
      </div>
      <div className="flex justify-between font-bold">
        <a href={source} className="underline text-bright-white">
          Add to my react app
        </a>
        <a href={source} className="underline opacity-50 text-bright-white">
          Checkout source
        </a>
      </div>
    </div>
  )
}

export default Card
