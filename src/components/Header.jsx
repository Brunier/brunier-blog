import React from "react"
import styled from "styled-components"
import { Hidden } from "react-awesome-styled-grid"
import StarsContainer from "./StarsContainer"

const TitleHead = styled.h1`
  position: absolute;
  background: #3c3d3e;
  color: ${({ theme: { mainColor } }) => mainColor};
  left: 50%;
  margin-left: -110px;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
  margin-top: 50px;
  font-family: ${({ theme: { titleFontFamily } }) => titleFontFamily};
  font-weight: 800;
`

const TitleHead2 = styled.h2`
  position: absolute;
  background: #3c3d3e;
  color: ${({ theme: { mainColor } }) => mainColor};
  left: 50%;
  margin-left: -110px;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
  margin-top: 120px;
  font-family: ${({ theme: { titleFontFamily } }) => titleFontFamily};
  font-weight: 800;
`
const ContainerStar = styled.div`
  height: 150px;
`

const NavBar = () => {
  return (
    <header>
      <TitleHead>Bruno Arcelino</TitleHead>
      <TitleHead2>Front-end developer</TitleHead2>
      <ContainerStar>
        <Hidden xs>
          <StarsContainer />
        </Hidden>
      </ContainerStar>
    </header>
  )
}

export default NavBar
