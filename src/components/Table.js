import React from "react"
import Card from "./Cards/Card"

const Table = ({ hooksList }) => {

  return (
    <div className="grid grid-cols-4 row-gap-3 col-gap-5 mt-3">
      {hooksList && hooksList.map((e, index) => <Card key={index} hook={e} />)}
    </div>
  )
}

export default Table
