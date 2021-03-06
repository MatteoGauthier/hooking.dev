import React from "react"
import Transition from "../../utils/Transition"
import { GithubIcon, StarIcon, HeartIcon, LikeIcon } from "../Icons"

import { Scrollbars } from "react-custom-scrollbars"
import "github-markdown-css"
import "../../assets/styles/modal.css"

const Modal = ({ onChildClick, isOpen, hook }) => {
  function handleClick() {
    onChildClick() // pass any argument to the callback
  }
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 transition-opacity" onClick={handleClick}>
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
        <div className="h-full sm:max-w-3xl sm:w-full max-h-4/5">
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className="overflow-y-scroll transition-all transform rounded-lg shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="h-full">
              <div className="sticky top-0 font-mono bg-dark-violet sm:px-6 sm:py-5">
                <div className="flex justify-between mb-1 font-bold">
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
                <div>
                  <span className="text-bright-cyan">description</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-400">
                    "Observe mouse enter and leave to element."
                  </span>
                </div>
              </div>
              <div className="h-full bg-white sm:p-6">
                <div
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: hook.html }}
                ></div>
              </div>
              <div className="sticky bottom-0 flex justify-between px-4 py-3 border border-t border-gray-200 bg-gray-50 sm:px-6">
                <div className="flex">
                  <span className="flex items-center w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <a
                      href={hook.frontmatter.source}
                      target="_blank"
                      type="button"
                      className="inline-flex items-center justify-center w-full px-4 py-2 space-x-1 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                    >
                      <GithubIcon className="w-5 h-5" />
                      <span>Source</span>
                    </a>
                  </span>
                </div>
                <div className="sm:flex sm:flex-row-reverse ">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-4 py-2 space-x-1 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-500 border border-transparent rounded-md shadow-sm hover:bg-red-400 focus:outline-none focus:border-red-200 focus:shadow-outline-red sm:text-sm sm:leading-5"
                    >
                      <LikeIcon className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                  </span>
                  <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      onClick={handleClick}
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                    >
                      Exit
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </Transition>
    </div>
  )
}
export default Modal
