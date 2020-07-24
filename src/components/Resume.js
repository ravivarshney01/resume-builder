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
      </div>
    )
  }
}

export default Resume
