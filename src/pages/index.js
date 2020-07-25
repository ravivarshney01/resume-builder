import React, { useRef, useState } from "react"
import DetailsContext from "../DetailsContext"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactToPrint from "react-to-print"
import Resume from "../components/Resume"
import "../styles/index.css"
import Modal from "react-modal"
import EditDetails from "../components/EditDetails"

Modal.setAppElement("#___gatsby")

const IndexPage = () => {
  const componentRef = useRef()
  const [valuesHook, setValuesHook] = useState({
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
    edu: [
      {
        degree: "B.Tech.",
        major: "Information Technology",
        college: "Indian Institute of Information Technology Vadodara",
        from: "2017",
        to: "2021(Expected)",
        result: "CGPA: 9.88 / 10",
      },
      {
        degree: "Intermediate +/2",
        major: "",
        college: "Ramesh Security Public School",
        from: "2015",
        to: "2017",
        result: "Aggregate: 69%",
      },
    ],
    extra: [
      "Member of XYZ club",
      "Winner of this game",
      "Organized community events",
      "Worked as volunteer in xyz",
    ],
  })

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)
  return (
    <DetailsContext.Provider value={valuesHook}>
      <Layout>
        <SEO title="Home" />
        <button
          onClick={toggleModal}
          className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <ReactToPrint
          trigger={() => (
            <button className="bg-teal-600 hover:bg-teal-800 py-2 px-4 text-white rounded float-right">
              Print this out!
            </button>
          )}
          content={() => componentRef.current}
        />
        <div
          style={{
            border: `black solid`,
          }}
        >
          <Resume ref={componentRef} />
        </div>
        {showModal ? (
          <Modal isOpen={showModal}>
            <button
              className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
            <EditDetails setValues={setValuesHook} values={valuesHook} />
          </Modal>
        ) : null}
      </Layout>
    </DetailsContext.Provider>
  )
}
export default IndexPage
