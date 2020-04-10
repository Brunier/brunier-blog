import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

const Container = styled.div`
  padding: 5px;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Header />
      <NavBar />
    </Container>
  </Layout>
)

export default IndexPage
