import React from "react"

import Card from "./Cards/Card"
const hooksSnippet ={
    name: "useHover()",
    stars: 128,
    desc: "Observe mouse enter and leave to element.",
    source: "https://github.com/MattixNow/mattaio-website"
  }


const Table = () => {
  return (
    <div className="grid grid-cols-4 row-gap-3 col-gap-5 mt-3">
      {[
        Array(10)
          .fill(hooksSnippet)
          .map(e => <Card name={e.name} stars={e.stars} desc={e.desc} source={e.source} />),
      ]}
    </div>
  )
}

export default Table
