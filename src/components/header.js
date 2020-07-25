import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [theme, setTheme] = useState("teal")
  const changeTheme = e => {
    const { currentTarget } = e
    const theme = currentTarget.getAttribute("data-theme")
    setTheme(theme)
  }
  const themeList = [
    "indigo",
    "orange",
    "teal",
    "red",
    "purple",
    "pink",
    "blue",
    "green",
  ]
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link to="/" className="text-white text-3xl">
        {siteTitle}
      </Link>

      <div className="text-sm px-4 py-2 leading-none bg-white rounded-full ml-auto">
        {themeList.map((t, k) => (
          <button
            key={k}
            data-theme={t}
            className={`theme-button focus:outline-none bg-${t}-500${
              theme === t ? " is-active" : ""
            }`}
            onClick={changeTheme}
          ></button>
        ))}
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
