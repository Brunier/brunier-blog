import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Container, config } from "react-awesome-styled-grid"

import Layout from "../components/layout"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import PostHome from "../components/PostHome"

const ContainerWithPadding = styled(Container)`
  padding: 5px;
`

const ContainerMain = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Main = styled.main`
  width: 100%;

  ${props => config(props).media["md"]`
    width: 60%;
  `}
`

const IndexPage = () => {
  const {
    allMarkdownRemark: { edges: postList },
  } = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark {
        edges {
          node {
            timeToRead
            frontmatter {
              data(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              description
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200, maxHeight: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ContainerWithPadding>
        <Header />
        <NavBar />
        <ContainerMain>
          <Main>
            {postList.map(
              ({
                node: {
                  frontmatter,
                  timeToRead,
                },
              }) => (
                <PostHome {...frontmatter} timeToRead={timeToRead} />
              )
            )}
          </Main>
        </ContainerMain>
      </ContainerWithPadding>
    </Layout>
  )
}

export default IndexPage
