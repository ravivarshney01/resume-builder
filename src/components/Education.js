import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faMapMarker } from "@fortawesome/free-solid-svg-icons"
const Education = ({ edu }) => {
  const { degree, major, college, from, to, result} = edu
  return (
    <div className="mb-2">
      <h1 className=" text-l title-font font-medium text-gray-900">{degree} {major}</h1>
      <h1 className=" text-l title-font font-medium text-blue-600">{college}</h1>
      <p className=" text-sm text-gray-700 font-light">
          <FontAwesomeIcon className="mr-2" icon={faCalendar} /> {from} - {to}
      </p>
      <p className="text-sm text-gray-700 font-light">
         {result}
      </p>
      
    </div>
  )
}

export default Education
