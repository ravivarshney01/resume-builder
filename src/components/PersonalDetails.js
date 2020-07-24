import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const PersonalDetails = ({ details }) => {
  const { email, mobile, twitter, name, linkedIn, github } = details
  return (
    <>
      <h1 className="text-5xl title-font font-medium text-gray-900 mt-4">
        {name}
      </h1>
      <p>
        <a className="text-xs pr-5" href="">
          <FontAwesomeIcon icon={faAt} className="text-blue-600" /> {email}
        </a>
        <span className="text-xs pr-5">
          <FontAwesomeIcon icon={faPhone} className="text-blue-600" /> {mobile}
        </span>
        <a className="text-xs pr-5" href={`https://twitter.com/${twitter}`}>
          <FontAwesomeIcon icon={faTwitter} className="text-blue-600" />{" "}
          {twitter}
        </a>
        <a className="text-xs pr-5" href={`https://linked.com/in/${linkedIn}`}>
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-600" />{" "}
          {linkedIn}
        </a>
        <a className="text-xs pr-5" href={`https://github.com/${github}`}>
          <FontAwesomeIcon icon={faGithub} className="text-blue-600" /> {github}
        </a>
      </p>
    </>
  )
}

export default PersonalDetails
