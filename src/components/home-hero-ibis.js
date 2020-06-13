import React, { useEffect, useState, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Tween, Timeline, Controls, PlayState } from "react-gsap"
import { Controller, Scene } from "react-scrollmagic"

const HomeHeroIbis = () => {
  const ibisOne = useRef(null)
  const ibisTwo = useRef(null)
  const ibisThree = useRef(null)

  return (
    <StaticQuery
      query={graphql`
        query {
          IbisGroupImage: file(relativePath: { eq: "ibis-group-v1.0.1.png" }) {
            childImageSharp {
              fixed(width: 500, height: 700) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          IbisImageOne: file(relativePath: { eq: "ibis-2-v1.0.1-right.png" }) {
            childImageSharp {
              fixed(width: 500, height: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          IbisImageTwo: file(relativePath: { eq: "ibis-1-right.png" }) {
            childImageSharp {
              fixed(width: 500, height: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          IbisImageThree: file(
            relativePath: { eq: "ibis-sun-v1.0-right.png" }
          ) {
            childImageSharp {
              fixed(width: 650, height: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div className="hero-ibis--container">
          <Controller>
            <Scene
              duration={3000}
              // pin=".hero-ibis--container"
              // indicators="true"
              triggerHook="onLeave"
              triggerElement=".hero-ibis--container"
              loglevel="3"
            >
              {progress => (
                <Tween
                  to={{ y: "300px" }}
                  totalProgress={progress}
                  stagger={0.1}
                  paused
                  duration={2}
                  ease="Strong.easeOut"
                >
                  <div className="img--container hero--ibis__three ">
                    <Img
                      ref={ibisThree}
                      className="hero--ibis"
                      fixed={data.IbisImageThree.childImageSharp.fixed}
                      objectFit="contain"
                    />
                  </div>
                  <div className="img--container hero--ibis__one ">
                    <Img
                      ref={ibisOne}
                      className=" hero--ibis"
                      fixed={data.IbisImageOne.childImageSharp.fixed}
                      objectFit="contain"
                    />
                  </div>
                  <div className="img--container hero--ibis__two ">
                    <Img
                      ref={ibisTwo}
                      className=" hero--ibis"
                      fixed={data.IbisImageTwo.childImageSharp.fixed}
                      objectFit="contain"
                    />
                  </div>
                </Tween>
              )}
            </Scene>
          </Controller>
          {/* <Controls playState={PlayState.play}></Controls> */}
        </div>
      )}
    />
  )
}

export default HomeHeroIbis
