import React from "react"
import "./layout.css"
const Skills = ({ skill }) => {
  return (
    <>
      <span class="inline-block bg-transparent text-gray-700 text-sm border border-gray-500 disabled rounded p-1 mb-1 ml-1">
        {skill}
      </span>
    </>
  )
}

export default Skills
