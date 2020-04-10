import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-awesome-styled-grid"
import Img from "gatsby-image"

const PostHomeContainer = styled(Container)`
  padding: 25px;
`

const PostImage = styled(Img)`
  max-width: 200px;
  max-height: 200px;
  min-height: 50px;
  min-width: 50px;
  width: 100%;

  border-radius: 200px;
  align-self: center;
`

const Title = styled.h3`
  font-size: 2.2em;
  margin: 10px 0;
  color: ${({ theme: { mainColor } }) => mainColor};
  font-family: ${({ theme: { titleFontFamily } }) => titleFontFamily};
`

const SubHeader = styled.div`
  color: ${({ theme: { mainColor } }) => mainColor};;
`

const PostDate = styled.span`
  margin-right: 10px;
`

const MinutesToRead = styled.span``

const TextIntro = styled.p`
  color: #fff;
`

export default () => {
  const { postImage } = useStaticQuery(
    graphql`
      query {
        postImage: file(relativePath: { eq: "post-image.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <PostHomeContainer>
      <Row>
        <Col md={2}>
          <PostImage fluid={postImage.childImageSharp.fluid} />
        </Col>
        <Col md={6}>
          <Title>Titulo</Title>
          <SubHeader>
            <PostDate>06/06/1996</PostDate>
            <MinutesToRead>10 minutos para ler</MinutesToRead>
          </SubHeader>
          <TextIntro>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eros lectus,
            pellentesque sed facilisis vel, lacinia rhoncus tortor. Aenean sed aliquet sem.
          </TextIntro>
        </Col>
      </Row>
    </PostHomeContainer>
  )
}
