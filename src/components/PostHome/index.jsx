import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Hidden, config } from "react-awesome-styled-grid"
import Img from "gatsby-image"

const PostHomeContainer = styled(Container)`
  padding: 25px;
  text-align: center;

  ${props => config(props).media["sm"]`
    text-align: left;
  `}
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
  font-weight: 800;
`

const SubHeader = styled.div`
  color: ${({ theme: { mainColor } }) => mainColor};
`

const PostDate = styled.span`
  display: block;

  ${props => config(props).media["md"]`
    display: inline;
    padding-right: 10px;
  `};
`

const MinutesToRead = styled.span`
  display: block;
  
  ${props => config(props).media["md"]`
    display: inline;
    padding-left: 10px;
  `};
`

const TextIntro = styled.p`
  color: #fff;
`

export default ({ data, description, featuredImage, title, timeToRead }) => {
  return (
    <PostHomeContainer>
      <Row>
        <Col md={2} sm={12}>
          <PostImage fluid={featuredImage.childImageSharp.fluid} />
        </Col>
        <Col md={6} sm={12}>
          <Title>{title}</Title>
          <SubHeader>
            <PostDate>{data}</PostDate>
            <Hidden xs>•</Hidden>
            <MinutesToRead>{timeToRead} minutos para ler</MinutesToRead>
          </SubHeader>
          <TextIntro>{description}</TextIntro>
        </Col>
      </Row>
    </PostHomeContainer>
  )
}
