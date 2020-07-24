import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faMapMarker } from "@fortawesome/free-solid-svg-icons"
const Experience = ({ ex }) => {
  const { role, company, from, to, location, points } = ex
  return (
    <div className="">
      <h1 className=" text-xl title-font font-medium text-gray-900">{role}</h1>
      <h1 className=" text-xl title-font font-medium text-blue-600">
        {company}
      </h1>
      <p className="text-gray-700 font-light">
        <span className="pl-1 pr-24">
          <FontAwesomeIcon className="mr-2" icon={faCalendar} /> {from} - {to}
        </span>
        <span className="">
          <FontAwesomeIcon className="mr-2" icon={faMapMarker} /> {location}
        </span>
      </p>
      <div className="text-gray-700 font-light">
        <ul className="list-inside list-disc">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
