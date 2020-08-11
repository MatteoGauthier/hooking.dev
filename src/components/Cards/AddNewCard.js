import React from "react"
import { PlusIcon } from "../Icons"
import { Link} from "gatsby"
const cardStyle = {
  height: "148px",
}

const AddNewCard = () => {
  return (
    <Link
      to="/newHook"
      tabIndex="0"
      style={cardStyle}
      className="relative flex flex-col items-center justify-center w-full px-4 py-3 space-y-3 rounded-lg shadow outline-none font-display bg-cool-gray-50 focus:shadow-outline-green"
      role="button"
    >
      <span className="text-4xl font-bold leading-none text-gray-400 ">
        <PlusIcon className="w-10 h-10" />
      </span>
      <div className="w-2/3 text-xs text-center text-gray-500">
        Wanted to add a hooks to the list ? Click to see the process 🤫
      </div>
    </Link>
  )
}

export default AddNewCard
