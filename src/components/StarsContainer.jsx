import React from "react"
import Star from "./Star"
import useWindowDimensions from "../hooks/useWindowDimensions"

const StarsContainer = () => {
  const STAR_WIDTH = 40
  const { width } = useWindowDimensions()
  const lenghtStarsByInnerWidth = Math.floor(width / STAR_WIDTH)

  return (
    <>
      {[...Array(lenghtStarsByInnerWidth)].map((_, key) => (
        <Star key={`star${key}`} />
      ))}
    </>
  )
}

export default StarsContainer
