import React, { useRef, useEffect } from "react"
import { TweenMax, TimelineLite } from "gsap"
import { theme } from './Layout';


const getRandomColor = () => {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const Star = () => {
  const star = useRef(null)
  const body = useRef(null)
  const eyes = useRef(null)
  
  const blinkTimeline = useRef()
  const flipTimeline = useRef()

  const onCompleteFlipTimeLine = () => {
    TweenMax.to(eyes.current, 1, {
      scale: 1,
      transformOrigin: "center center",
    })
    flipTimeline.current.reverse()
    blinkTimeline.current.resume()
  }

  useEffect(() => {
    TweenMax.to(star.current, 5, {
      left: Math.abs((Math.random() * 300) - 200),
      y: Math.random() * 100,
    })

    blinkTimeline.current = new TimelineLite({ paused: true, repeat: -1, yoyo: true }).to(
      eyes.current,
      0.5,
      {
        scaleY: 0.1,
        transformOrigin: "center center",
        delay: 1 + Math.random() * 2,
      }
    )

    TweenMax.to([body.current, eyes.current], 0.5 , {
      y: 60,
      yoyo: true,
      repeat: -1,
      delay: 1 + Math.random() * 2,
    });

    flipTimeline.current = new TimelineLite({ paused: true, onComplete: onCompleteFlipTimeLine }).to(
      body.current,
      Math.random() * 5 + 1,
      {
        rotation: 360,
        transformOrigin: "center center",
        fill: getRandomColor(),
      }
    )

    blinkTimeline.current.play()
  }, [])

  const onHoverBody = () => {
    TweenMax.to(eyes.current, 3, {
      scale: 1.3,
      transformOrigin: "center center",
    })

    blinkTimeline.current.pause()
    flipTimeline.current.play()
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="47"
      viewBox="0 0 296.063 283.937"
      onMouseEnter={onHoverBody}
      ref={star}
    >
      <path
        ref={body}
        d="M201.991 287.542q-52.64-21.571-105.164.28t-48.274-34.878q4.25-56.728-32.763-99.93t18.252-56.689q55.266-13.489 84.915-62.04t59.555-.159q29.907 48.393 85.244 61.587t18.554 56.592q-36.782 43.4-32.231 100.1t-48.088 35.137z"
        transform="translate(-.938 -9.969)"
        fillRule="evenodd"
        fill={theme.mainColor}
      />
      <path
        ref={eyes}
        d="M99.418 77.243c7.148.2 12.632 11.606 12.249 25.483s-6.488 24.964-13.637 24.767-12.632-11.606-12.249-25.482 6.489-24.966 13.637-24.768zM194.449 79.864c7.153.2 12.641 11.6 12.258 25.479s-6.492 24.961-13.645 24.764-12.64-11.6-12.257-25.479 6.492-24.961 13.644-24.764z"
      />
    </svg>
  )
}

export default Star
