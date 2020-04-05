import React from "react"
import PropTypes from "prop-types"
import Normalize from "react-normalize"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #242425;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
