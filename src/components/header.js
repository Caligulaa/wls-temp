import PropTypes from "prop-types"
import React from "react"
import imgHead from "../images/temp-logo.jpg"

const Header = ({ siteTitle }) => (
  <header>
    <img src={imgHead} alt="logo" className="imGcenter" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
