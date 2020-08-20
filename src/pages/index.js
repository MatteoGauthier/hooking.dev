import React from "react"
import Header from "../components/Header"
import DashBoard from "../components/DashBoard"
import SEO from "../components/SEO/"
export default function Home() {
  return (
    <div className="container mx-auto antialiased">
      <SEO/>
      <Header />
      <hr className="mx-8 my-16 border border-indigo-200 rounded-lg" />
      <DashBoard />
    </div>
  )
}
