import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavMenu = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`

const UlMenu = styled.ul`
  list-style: none;
  color: #6ca6e0;
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  padding-inline-start: 0;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const MenuItem = styled.li`
  margin-top: 10px;

  @media (min-width: 768px) {
    & + &::before {
      content: "|";
      white-space: nowrap;
      padding: 50px;
      color: #6ca6e0;
    }
  }
`

const TextMenuExternal = styled.a`
  cursor: pointer;
  color: #6ca6e0;

  &:hover {
    color: #8fc7ff;
  }

  @media (min-width: 768px) {
    text-decoration: none;
  }
`

const TextMenuInternal = styled(props => <Link {...props} />)`
  cursor: pointer;
  color: #6ca6e0;

  &:hover {
    color: #8fc7ff;
  }

  @media (min-width: 768px) {
    text-decoration: none;
  }
`

const NavBar = () => {
  return (
    <NavMenu>
      <UlMenu>
        <MenuItem>
          <TextMenuInternal to="/about/">Sobre Mim</TextMenuInternal>
        </MenuItem>
        <MenuItem>
          <TextMenuExternal target="_blank" href="https://br.linkedin.com/in/brunoarcelino">
            Linkedin
          </TextMenuExternal>
        </MenuItem>
        <MenuItem>
          <TextMenuExternal target="_blank" href="https://github.com/Brunier">
            Github
          </TextMenuExternal>
        </MenuItem>
        <MenuItem>
          <TextMenuInternal to="/contact/">Contato</TextMenuInternal>
        </MenuItem>
      </UlMenu>
    </NavMenu>
  )
}

export default NavBar
