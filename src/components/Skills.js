import React from "react"
import './layout.css'
const Skills = ({ skill }) => {
  
  return (
    <>
      <p class="pill bg-transparent text-gray-700 font-semibold  py-1 px-3 border border-gray-700 disabled rounded ">
         {skill}
      </p>
    </>
  )
}

export default Skills

