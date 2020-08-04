import React from "react"
import Transition from "../../utils/Transition"
import StarIcon from "../Icons/StarIcon"
import HeartIcon from "../Icons/HeartIcon"

const Modal = ({ onChildClick, isOpen, hook }) => {
  function handleClick() {
    onChildClick() // pass any argument to the callback
  }
  function handleClickOutside(event) {
    console.log(event.relatedTarget)
    // onChildClick() // pass any argument to the callback
  }
  return (
    <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 opacity-75 bg-cool-gray-900"></div>
        </div>
      </Transition>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          className="overflow-hidden font-mono transition-all transform rounded-lg shadow-xl bg-dark-violet sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="px-4 pt-5 pb-4 bg-dark-violet sm:p-6 sm:pb-4">
            <div className="flex justify-between mb-3 font-bold">
              <span className="text-lg text-bright-green">
                {hook.frontmatter.title}
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
            <div>
              <span className="text-bright-cyan">description</span>
              <span className="text-gray-400">:</span>{" "}
              <span className="text-green-400">
                "Observe mouse enter and leave to element."
              </span>
            </div>
            <div dangerouslySetInnerHTML={{__html: hook.html}}></div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
              >
                Deactivate
              </button>
            </span>
            <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                onClick={handleClick}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </Transition>
    </div>
  )
}
export default Modal
