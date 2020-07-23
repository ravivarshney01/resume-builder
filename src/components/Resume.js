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
      </div>
    )
  }
}

export default Resume
