import React, { useState } from "react"

const EditDetails = ({ values, setValues, theme }) => {
  const { details, exp, skills, project, edu, extra } = values
  const [openTab, setOpenTab] = useState(1)

  const handleChangeExp = e => {
    exp[e.target.id[e.target.id.length - 1]][
      e.target.id.slice(0, e.target.id.length - 2)
    ] = e.target.value
    setValues({
      ...values,
      exp: exp,
    })
  }

  const handleChangePoint = (e, i, ip) => {
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

  const handleAddSkills = () => {
    skills.push("")
    setValues({
      ...values,
      skills: skills,
    })
  }
  const handleDeleteSkill = i => {
    skills.splice(i, 1)
    setValues({
      ...values,
      skills: skills,
    })
  }
  const handleChangeSkill = (e, i) => {
    skills[i] = e.target.value
    setValues({
      ...values,
      skills: skills,
    })
  }
  const handleAddPro = () => {
    project.push({
      title: "My awesome Project",
      date: "Jan 19 - Sep 19",
      link: "https://github.com",
      points: [
        "this is awesome project, you can visit the above link to know more",
        "my solo project",
        "tech- react, gatsby",
      ],
    })
    setValues({
      ...values,
      project: project,
    })
  }
  const handleChangePro = e => {
    project[e.target.id[e.target.id.length - 1]][
      e.target.id.slice(0, e.target.id.length - 2)
    ] = e.target.value

    setValues({
      ...values,
      project: project,
    })
  }
  const handleDeletePro = i => {
    project.splice(i, 1)
    setValues({
      ...values,
      project: project,
    })
  }

  const handleChangeProPoint = (e, i, ip) => {
    project[i].points[ip] = e.target.value
    setValues({
      ...values,
      project: project,
    })
  }
  const handleAddProPoint = i => {
    project[i].points.push("")
    setValues({
      ...values,
      project: project,
    })
  }

  const handleDeleteProPoint = (i, ip) => {
    project[i].points.splice(ip, 1)
    setValues({
      ...values,
      project: project,
    })
  }

  const handleAddExtra = () => {
    extra.push("")
    setValues({
      ...values,
      extra: extra,
    })
  }
  const handleDeleteExtra = i => {
    extra.splice(i, 1)
    setValues({
      ...values,
      extra: extra,
    })
  }
  const handleChangeExtra = (e, i) => {
    extra[i] = e.target.value
    setValues({
      ...values,
      extra: extra,
    })
  }
  const handleAddEdu = () => {
    edu.push({
      degree: "B.Tech.",
      major: "Information Technology",
      college: "Indian Institute of Information Technology Vadodara",
      from: "2017",
      to: "2021(Expected)",
      result: "CGPA: 9.88 / 10",
    })
    setValues({
      ...values,
      edu: edu,
    })
  }
  const handleChangeEdu = e => {
    edu[e.target.id[e.target.id.length - 1]][
      e.target.id.slice(0, e.target.id.length - 2)
    ] = e.target.value
    setValues({
      ...values,
      edu: edu,
    })
  }
  const handleDeleteEdu = i => {
    edu.splice(i, 1)
    setValues({
      ...values,
      edu: edu,
    })
  }
  const color = theme
  return (
    <div className="container">
      <ul
        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
        role="tablist"
      >
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 1
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(1)
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Personal Details
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 2
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(2)
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Experience
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 3
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(3)
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            Projects
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 4
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(4)
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
          >
            Skills
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 5
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(5)
            }}
            data-toggle="tab"
            href="#link5"
            role="tablist"
          >
            Education
          </a>
        </li>
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
              (openTab === 6
                ? "text-white bg-" + color + "-600"
                : "text-" + color + "-600 bg-white")
            }
            onClick={e => {
              e.preventDefault()
              setOpenTab(6)
            }}
            data-toggle="tab"
            href="#link6"
            role="tablist"
          >
            Extra
          </a>
        </li>
      </ul>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
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
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              {/* Experience */}

              <button
                className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
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
                      className=" w-1/12 float-right border-none"
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
                    onChange={handleChangeExp}
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
                    onChange={handleChangeExp}
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
                    onChange={handleChangeExp}
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
                    onChange={handleChangeExp}
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
                    onChange={handleChangeExp}
                  />
                  <h4 className="text-base title-font font-medium">Points</h4>
                  <button
                    className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                    type="button"
                    onClick={e => handleAddPoint(e, i)}
                  >
                    Add Point
                  </button>
                  {ex.points.map((p, ip) => (
                    <div className="flex-row" key={ip}>
                      <button
                        className=" w-1/12 float-right border-none"
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
                        onChange={e => handleChangePoint(e, i, ip)}
                      />
                    </div>
                  ))}
                  <hr />
                </div>
              ))}
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              {/* Projects */}

              <button
                className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                type="button"
                onClick={handleAddPro}
              >
                Add Project
              </button>
              {project.map((pro, i) => (
                <div key={i}>
                  <h4 className="text-xl title-font font-medium">
                    Project - {i + 1}{" "}
                    <button
                      className=" w-1/12 float-right border-none"
                      type="button"
                      onClick={e => handleDeletePro(i)}
                    >
                      ❌
                    </button>
                  </h4>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`title-${i}`}
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`title-${i}`}
                    type="text"
                    value={pro.title}
                    onChange={handleChangePro}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`date-${i}`}
                  >
                    Date
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`date-${i}`}
                    type="text"
                    value={pro.date}
                    onChange={handleChangePro}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`link-${i}`}
                  >
                    Link
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`link-${i}`}
                    type="text"
                    value={pro.link}
                    onChange={handleChangePro}
                  />

                  <h4 className="text-base title-font font-medium">Points</h4>
                  <button
                    className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                    type="button"
                    onClick={e => handleAddProPoint(i)}
                  >
                    Add Point
                  </button>
                  {pro.points.map((p, ip) => (
                    <div className="flex-row" key={ip}>
                      <button
                        className=" w-1/12 float-right border-none"
                        type="button"
                        onClick={e => handleDeleteProPoint(i, ip)}
                      >
                        ❌
                      </button>
                      <input
                        className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        value={p}
                        id={`point-${i}-${ip}`}
                        key={ip}
                        onChange={e => handleChangeProPoint(e, i, ip)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={openTab === 4 ? "block" : "hidden"} id="link3">
              {/* Skills */}
              <button
                className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                type="button"
                onClick={handleAddSkills}
              >
                Add Skill
              </button>
              {skills.map((sk, i) => (
                <div className="flex-row" key={i}>
                  <button
                    className=" w-1/12 float-right border-none"
                    type="button"
                    onClick={e => handleDeleteSkill(i)}
                  >
                    ❌
                  </button>
                  <input
                    className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    value={sk}
                    id={`skill-${i}`}
                    onChange={e => handleChangeSkill(e, i)}
                  />
                </div>
              ))}
            </div>
            <div className={openTab === 5 ? "block" : "hidden"} id="link3">
              {/* Education */}
              <button
                className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                type="button"
                onClick={handleAddEdu}
              >
                Add Education
              </button>
              {edu.map((ed, i) => (
                <div key={i}>
                  <h4 className="text-xl title-font font-medium">
                    Education - {i + 1}{" "}
                    <button
                      className=" w-1/12 float-right border-none"
                      type="button"
                      onClick={e => handleDeleteEdu(i)}
                    >
                      ❌
                    </button>
                  </h4>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`degree-${i}`}
                  >
                    Degree
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`degree-${i}`}
                    type="text"
                    value={ed.degree}
                    onChange={handleChangeEdu}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`major-${i}`}
                  >
                    Major
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`major-${i}`}
                    type="text"
                    value={ed.major}
                    onChange={handleChangeEdu}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`college-${i}`}
                  >
                    College
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`college-${i}`}
                    type="text"
                    value={ed.college}
                    onChange={handleChangeEdu}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`from-${i}`}
                  >
                    From
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`from-${i}`}
                    type="text"
                    value={ed.from}
                    onChange={handleChangeEdu}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`to-${i}`}
                  >
                    To
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`to-${i}`}
                    type="text"
                    value={ed.to}
                    onChange={handleChangeEdu}
                  />
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor={`result-${i}`}
                  >
                    Result
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id={`result-${i}`}
                    type="text"
                    value={ed.result}
                    onChange={handleChangeEdu}
                  />
                </div>
              ))}
            </div>
            <div className={openTab === 6 ? "block" : "hidden"} id="link3">
              {/* Extra */}
              <button
                className={`bg-${theme}-500 hover:bg-${theme}-700 text-white font-bold py-2 px-4 rounded focus:outline-none`}
                type="button"
                onClick={handleAddExtra}
              >
                Add Extra Curricular
              </button>
              {extra.map((ext, i) => (
                <div className="flex-row" key={i}>
                  <button
                    className=" w-1/12 float-right border-none"
                    type="button"
                    onClick={e => handleDeleteExtra(i)}
                  >
                    ❌
                  </button>
                  <input
                    className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    value={ext}
                    id={`skill-${i}`}
                    onChange={e => handleChangeExtra(e, i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditDetails
