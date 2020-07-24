import React from "react"

const Project = ({ pro }) => {
  const { title, date, points, link } = pro
  return (
    <div>
      <h1 className=" text-xl title-font font-medium text-gray-900">{title}</h1>
      <h1 className=" text-l title-font font-medium text-blue-600">
        {date}
        {link !== "" && (
          <a className="float-right" href={link} target="blank">
            Link
          </a>
        )}
      </h1>
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

export default Project
