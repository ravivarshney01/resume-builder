import React, { Component } from "react"
import PersonalDetails from "./PersonalDetails"

class Resume extends Component {
  render() {
    return (
      <div
        style={{
          size: `7in 9.25in`,
          padding: `10mm 16mm 27mm 10mm`,
        }}
      >
        <PersonalDetails />
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
