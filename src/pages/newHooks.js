import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDebouncedCallback } from "use-debounce"

import Editor from "react-simple-code-editor"
import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-markdown"
import "prismjs/themes/prism.css"
// import "prismjs/themes/prism"

import "../assets/styles/newHook.css"
  console.log(languages)

const code = `# Salut`
const NewHooks = () => {
  const { register, handleSubmit, errors } = useForm()
  const [snippet, setSnippet] = useState({})
  const [instru, setInstru] = useState(code)

  const onSubmit = data => {
    setSnippet({ name: data.name, author: data.author, source: data.source, description: data.description, instru })
    handleSend()
  }

  const [handleChange] = useDebouncedCallback(value => {
    setInstru(value())
  }, 1000)

  const handleSend = () => {
     console.log(snippet)
    const d = new Date()
    const year = d.getFullYear() // 2019
    const date = d.getDate() // 23
    const month = d.getMonth() // 23

    const body = `---
date: "${year}-${month}-${date}"
name: "${snippet.name}"
stars: 128
description: "Observe mouse enter and leave to element."
source: "https://github.com/MattixNow/mattaio-website"
---`
    console.log(body)

    // var link = `https://github.com/MattixNow/hooking.dev/new/master/content/hooks?filename=${snippet.name}.md&value=`
    // window.open("someLink", "_blank")
    // let filename = value
    // return "https://github.com/MattixNow/hooking.dev/new/master/content/hooks?filename=useYourHookName.md&value=bar"
  }
  // console.log(errors)
  return (
    <div className="max-w-4xl p-5 mx-auto mt-16 font-display">
      <h1 className="mb-4 text-3xl font-bold text-cool-gray-800">
        Add a new hooks on this website !
      </h1>
      <p className="text-gray-700">
        This page will generate an URL to github, it simplify the process of
        creating a new branch, a commit and a pull requests. With this generator
        you just have to fill the information of the hook you wanted to add, and
        click on the{" "}
        <b className="italic font-medium text-teal-800">Send to Github</b>{" "}
        button.
      </p>
      <hr className="mx-8 my-10 border border-indigo-200 rounded-lg" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 rounded-lg"
      >
        <div className="px-4 py-5 border-b border-gray-200 rounded-t-lg bg-cool-gray-50 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Hook creation
          </h3>
          <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
            Pull request generator, powered by github params
          </p>
        </div>
        <div className="px-4 py-5 space-y-4 sm:px-6">
          <div className="flex justify-between space-x-6">
            <label className="block w-full">
              <div className="flex justify-between ">
                <span className="text-lg font-medium text-gray-900">
                  Hook name
                </span>
                {errors.name && (
                  <span className="flex items-center text-xs font-medium tracking-wide text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <input
                type="text"
                name="name"
                ref={register({
                  required: { value: true, message: `This field is required` },
                  maxLength: { value: 80, message: `The maximum length is 80` },
                })}
                className="block w-full mt-1 form-input"
                placeholder="useSomething()"
              />
            </label>
            <label className="block w-full">
              <div className="flex justify-between ">
                <span className="text-lg font-medium text-gray-900">
                  Hook description
                </span>

                {errors.description && (
                  <span className="flex items-center text-xs font-medium tracking-wide text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <input
                type="text"
                name="description"
                ref={register({
                  required: "This field is required",
                  minLength: { value: 20, message: "The minimum length is 20" },
                  maxLength: { value: 70, message: "The maximum length is 70" },
                })}
                className="block w-full mt-1 form-input"
                placeholder="A very useful hook that does this and this easily"
              />
            </label>
          </div>
          <div className="flex justify-between space-x-6">
            <label className="block w-full">
              <div className="flex justify-between ">
                <span className="text-lg font-medium text-gray-900">
                  Source code
                </span>
                {errors.source && (
                  <span className="flex items-center text-xs font-medium tracking-wide text-red-500">
                    {errors.source.message}
                  </span>
                )}
              </div>
              <input
                type="url"
                name="source"
                ref={register({
                  required: "This field is required",
                  pattern: {
                    value: /(https?:\/\/github\.com\/+.*)/gm,
                    message: "The url must be from github.com",
                  },
                })}
                className="block w-full mt-1 form-input"
                placeholder="useSomething()"
              />
            </label>
            <label className="block w-full">
              <div className="flex justify-between ">
                <span className="text-lg font-medium text-gray-900">
                  Author
                </span>
                {errors.author && (
                  <span className="flex items-center text-xs font-medium tracking-wide text-red-500">
                    {errors.author.message}
                  </span>
                )}{" "}
              </div>
              <input
                className="block w-full mt-1 form-input"
                type="text"
                placeholder="Author"
                name="author"
                ref={register}
              />
            </label>
          </div>
          <div className="relative">
            <span className="text-lg font-medium text-gray-900">
              Hook description (Markdown editor)
            </span>
            <div className="px-12 py-2 mt-1 border border-gray-300 rounded ">
              <Editor
                value={instru}
                onValueChange={setInstru}
                highlight={code => highlight(code, languages.markdown)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 12,
                }}
              />
              {/* <Editor
                value={setInstru}
                onChange={handleChange}
                className="bg-white "
              /> */}
            </div>
          </div>
          <button
            onClick={() => {
              handleSend()
            }}
            type="submit"
            className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-400 focus:outline-none focus:border-green-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
          >
            Send to Github
          </button>
        </div>
      </form>
      {JSON.stringify(snippet, null, 2)}
    </div>
  )
}

export default NewHooks
