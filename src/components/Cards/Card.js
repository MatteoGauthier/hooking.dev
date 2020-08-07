import React from "react"

import StarIcon from "../Icons/StarIcon"
import HeartIcon from "../Icons/HeartIcon"

import Modal from "./Modal.js"
const cardStyle = {
  height: "148px",
}

const Card = ({ hook: hook }) => {
  const [showModal, setShowModal] = React.useState(false)
  function handleChildClick() {
    setShowModal(false)
  }
  return (
    <>
      {showModal ? (
        <Modal onChildClick={handleChildClick} hook={hook} isOpen={showModal} />
      ) : null}
      <div
        tabIndex="0"
        style={cardStyle}
        className="flex flex-col justify-between w-full px-4 py-3 font-mono rounded-lg shadow-2xl outline-none bg-dark-violet focus:shadow-outline-green"
        onClick={() => setShowModal(true)}
        role="button"
      >
        <div>
          <div className="flex justify-between mb-3 font-bold">
            <span className="text-lg text-bright-green">
              {hook.frontmatter.name}
              <span>()</span>
            </span>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1 text-bright-yellow">
                <StarIcon />
                <span>{hook.frontmatter.stars}</span>
              </div>
              <div className="flex items-center space-x-1 text-bright-red">
                <HeartIcon />
                <span>112</span>
              </div>
            </div>
          </div>
          <p className="text-soft-violet">{hook.frontmatter.description}</p>
        </div>
        <div className="flex justify-between font-bold">
          <a
            href={hook.frontmatter.source}
            className="underline text-bright-white"
          >
            Add to my react app
          </a>
          <a
            href={hook.frontmatter.source}
            className="underline opacity-50 text-bright-white"
          >
            Checkout source
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
