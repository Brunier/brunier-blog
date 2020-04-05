import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import StarsContainer from "../components/StarsContainer"
import NavBar from "../components/NavBar"

const TitleHead = styled.h1`
  position: absolute;
  background: #3c3d3e;
  color: #6da6e0;
  left: 50%;
  margin-left: -110px;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
  margin-top: 50px;
`

const TitleHead2 = styled.h2`
  position: absolute;
  background: #3c3d3e;
  color: #6da6e0;
  left: 50%;
  margin-left: -110px;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
  margin-top: 120px;
`

const Container = styled.div`
  padding: 5px;
`
const ContainerStar = styled.div`
  height: 150px;
`



const IndexPage = () => (
  <Layout>
    <Container>
      <div>
        <TitleHead>Bruno Arcelino</TitleHead>
        <TitleHead2>Front-end developer</TitleHead2>
      </div>
      <ContainerStar>
        <StarsContainer />
      </ContainerStar>
      <NavBar />
    </Container>
  </Layout>
)

export default IndexPage
