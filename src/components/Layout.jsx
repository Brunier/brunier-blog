import React from "react"
import PropTypes from "prop-types"
import Normalize from "react-normalize"
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #242425;
  }
`

export const theme = {
  mainColor: "orange", //#6da6e0
  mainHover: "blue", //#8fc7ff;
  titleFontFamily: '"Fredoka One", cursive',
}

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
