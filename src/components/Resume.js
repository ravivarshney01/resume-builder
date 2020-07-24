import React, { Component } from "react"
import PersonalDetails from "./PersonalDetails"

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
    }
  }

  render() {
    return (
      <div
        style={{
          height: `297mm`,
          padding: `10mm 16mm 27mm 10mm`,
          margin: 0,
        }}
      >
        <PersonalDetails details={this.state.details} />
        <div className="flex pt-6">
          <div className="w-7/12">
            {/* left side */}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium">
              EXPERIENCE
            </h2>
          </div>
          <div className="w-1/12">{/* empty space */}</div>
          <div className="w-4/12">
            {/* right side */}
            <h2 className="w-full text-2xl text-blue-600 border-b-2 border-blue-600 font-medium">
              SKILLS
            </h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
