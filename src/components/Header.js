import React from "react"
import Logo from "./Logo.svg.js"
import { HTwo, Paragraph, Link } from "./Typo"

const Header = () => {
  return (
    <div className="flex mt-16 space-x-8">
      <Logo className="w-1/4" />
      <div className="w-1/4">
        <HTwo>Information</HTwo>
        <Paragraph>
          React presented us Hooks in 2018, this feature is loved by React
          users, it allow us to create more efficient react applications, here
          is a collection of different utility hooks for your next projects.
          Hooks presented here are lightweight and scoped, thanks to treeshaking
          export.
        </Paragraph>
      </div>
      <div className="w-1/4">
        <HTwo>Contribute</HTwo>
        <Paragraph>
          This website is open source, it means you can see the website code.
          Although i’ve build this application using React and the Gatsby
          framework, and it’s hosted on Vercel.
        </Paragraph>
        <Link href="httsdqdsqdqs:dsdsdqd">Goto the source code</Link>
      </div>
      <div className="w-1/4">
        <HTwo>About the author</HTwo>
        <Paragraph>
          Hey my name is Mattèo i’m a 18yo self-taught front-end web developer
          from France (Poitiers). I design websites with Figma and build them
          with Vue, Nuxt or React. If you want to know more about me you could
          take a look at my personal website. Bye{" "}
          <span role="img" aria-label="Face with Tongue">
            😛
          </span>
        </Paragraph>
        <Link href="https://mattèo.dev">Goto Mattèo.dev</Link>
      </div>
    </div>
  )
}

export default Header
