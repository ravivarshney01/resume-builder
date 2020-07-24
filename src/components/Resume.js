import React, { Component } from "react"
import PersonalDetails from "./PersonalDetails"
import Experience from "./Experience"
import Skills from "./Skills"
import Project from "./Project"
import Extra from "./Extra"

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {
        name: "John Doe",
        twitter: "johnD",
        linkedIn: "johnD",
        github: "johnD",
        email: "john@john.com",
        mobile: "+1-12345-6622",
      },
      exp: [
        {
          role: "SDE",
          company: "Facebook",
          from: "July 19",
          to: "Present",
          location: "Remote",
          points: [
            "made awesome react",
            "made redux ",
            "working with react team",
          ],
        },
        {
          role: "SDE",
          company: "Facebook",
          from: "July 19",
          to: "Present",
          location: "Remote",
          points: [
            "made awesome react",
            "made redux ",
            "working with react team",
          ],
        },
      ],
      skills: [
        "C",
        "C++",
        "Firebase",
        "LaTeX",
        "Visual Studio Code",
        "Bootstrap",
      ],
      project: [
        {
          title: "My awesome Project",
          date: "Jan 19 - Sep 19",
          link: "https://github.com",
          points: [
            "this is awesome project, you can visit the above link to know more",
            "my solo project",
            "tech- react, gatsby",
          ],
        },
        {
          title: "My awesome Project",
          date: "Jan 19 - Sep 19",
          link: "",
          points: [
            "this is awesome project",
            "my solo project",
            "team-size: 4",
            "tech- react, gatsby",
          ],
        },
        {
          title: "My awesome Project",
          date: "Jan 19 - Sep 19",
          link: "",
          points: [
            "this is awesome project",
            "my solo project",
            "tech- react, gatsby",
          ],
        },
      ],
      extra: [
        "Member of XYZ club",
        "Winner of this game",
        "Organized community events",
        "Worked as volunteer in xyz",
      ],
    }
  }

  render() {
    return (
      <div
        style={{
          height: `297mm`,
          padding: `10mm`,
          margin: 0,
        }}
      >
        <PersonalDetails details={this.state.details} />
        <div className="flex pt-6">
          <div className="w-7/12">
            {/* left side */}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium mb-3">
              EXPERIENCE
            </h2>
            {this.state.exp.map((ex, i) => (
              <Experience ex={ex} key={i} />
            ))}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium mb-3">
              PROJECTS
            </h2>
            {this.state.project.map((pro, i) => (
              <Project pro={pro} key={i} />
            ))}
          </div>
          <div className="w-1/12">{/* empty space */}</div>
          <div className="w-4/12">
            {/* right side */}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium mb-3">
              SKILLS
            </h2>
            {this.state.skills.map((sk, i) => (
              <Skills skill={sk} key={i} />
            ))}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium mb-3">
              EXTRA CURRICULAR
            </h2>
            <ol className="list-inside list-disc text-gray-700">
              {this.state.extra.map((extra, i) => (
                <Extra extra={extra} key={i} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
