import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import PostHome from "../components/PostHome"

const Container = styled.div`
  padding: 5px;
`

const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Main = styled.main`
  width: 60%;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Header />
      <NavBar />
      <ContainerMain>
        <Main>
          <PostHome />
          <PostHome />
          <PostHome />
        </Main>
      </ContainerMain>
    </Container>
  </Layout>
)

export default IndexPage
