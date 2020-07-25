import React from "react"

const EditDetails = ({ values, setValues }) => {
  const { details, exp } = values

  const handleExpChange = e => {
    exp[e.target.id[e.target.id.length - 1]][
      e.target.id.slice(0, e.target.id.length - 2)
    ] = e.target.value
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handlePointChange = (e, i, ip) => {
    // ex.points[ip] = e.target.value
    exp[i].points[ip] = e.target.value
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handleAddPoint = (e, i) => {
    exp[i].points.push("")
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handleDeletePoint = (e, i, ip) => {
    exp[i].points.splice(ip, 1)
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handleDeleteExp = (e, i) => {
    exp.splice(i, 1)
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handleAddExp = e => {
    exp.push({
      role: "SDE",
      company: "Facebook",
      from: "July 19",
      to: "Present",
      location: "Remote",
      points: ["made awesome react", "made redux ", "working with react team"],
    })
    setValues({
      ...values,
      exp: exp,
    })
  }

  return (
    <div className="container">
      <h1 className="text-5xl title-font font-medium text-gray-900 mt-4">
        Personal Details
      </h1>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="name"
        type="text"
        value={details.name}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, name: e.target.value },
          })
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="email"
        type="text"
        value={details.email}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, email: e.target.value },
          })
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="mobile"
      >
        Contact Number
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="mobile"
        type="text"
        value={details.mobile}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, mobile: e.target.value },
          })
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="twitter"
      >
        Twitter
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="twitter"
        type="text"
        value={details.twitter}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, twitter: e.target.value },
          })
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="linkedIn"
      >
        LinkedIn
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="linkedIn"
        type="text"
        value={details.linkedIn}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, linkedIn: e.target.value },
          })
        }}
      />
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="github"
      >
        GitHub
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="github"
        type="text"
        value={details.github}
        onChange={e => {
          setValues({
            ...values,
            details: { ...details, github: e.target.value },
          })
        }}
      />

      {/* Experience */}
      <h1 className="text-5xl title-font font-medium text-gray-900 mt-4">
        Experience
      </h1>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleAddExp}
      >
        Add Experience
      </button>
      {exp.map((ex, i) => (
        <div key={i}>
          <h4 className="text-xl title-font font-medium">
            Experience - {i + 1}{" "}
            <button
              class=" w-1/12 float-right border-none"
              type="button"
              onClick={e => handleDeleteExp(e, i)}
            >
              ❌
            </button>
          </h4>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={`role-${i}`}
          >
            Role
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`role-${i}`}
            type="text"
            value={ex.role}
            onChange={handleExpChange}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={`company-${i}`}
          >
            Company
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`company-${i}`}
            type="text"
            value={ex.company}
            onChange={handleExpChange}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={`from-${i}`}
          >
            Start Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`from-${i}`}
            type="text"
            value={ex.from}
            onChange={handleExpChange}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={`to-${i}`}
          >
            End Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`to-${i}`}
            type="text"
            value={ex.to}
            onChange={handleExpChange}
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={`location-${i}`}
          >
            location
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id={`location-${i}`}
            type="text"
            value={ex.location}
            onChange={handleExpChange}
          />
          <h4 className="text-base title-font font-medium">Points</h4>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={e => handleAddPoint(e, i)}
          >
            Add Point
          </button>
          {ex.points.map((p, ip) => (
            <div className="flex-row">
              <button
                class=" w-1/12 float-right border-none"
                type="button"
                onClick={e => handleDeletePoint(e, i, ip)}
              >
                ❌
              </button>
              <input
                className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={p}
                id={`point-${i}-${ip}`}
                key={ip}
                onChange={e => handlePointChange(e, i, ip)}
              />
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  )
}

export default EditDetails
