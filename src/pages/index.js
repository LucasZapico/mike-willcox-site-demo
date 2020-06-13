import React, { useRef, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import HeroShape from "../components/heroshape"
import HomeHeroIbis from "../components/home-hero-ibis"

import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline, Reveal } from "react-gsap"

const IndexPage = ({ data }) => {
  const heroTrig = useRef(null)
  const featuredOne = useRef(null)
  const featuredTwo = useRef(null)
  const featuredThree = useRef(null)
  const featuredTrigger = useRef(null)
  const featuredPin = useRef(null)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="page--home">
        <section className="hero full-view-height" ref={heroTrig}>
          <div className="hero-content">
            <div>
              <div className="hero-content--headline">
                <h1>Mike Willcox is a muli disciplinary artist</h1>
              </div>
            </div>
          </div>
          <HomeHeroIbis />
          <HeroShape />
        </section>

        <section className="featured-work--section">
          <h3>Featured</h3>
          <h5>Sub header</h5>
          <div className="featured-work--container">
            <Controller>
              <Scene
                triggerHook="onCenter"
                // indicators="true"
                duration={3000}
                triggerElement=".featured-work--section"
                loglevel="3"
                pin={true}
              >
                {progress => (
                  <Tween
                    to={{ x: "100%" }}
                    ease="Power2.easeOut"
                    totalProgress={progress}
                    paused
                  >
                    <div className="featured-work" ref={featuredTrigger}>
                      <div className="featured-img--container">
                        <Img
                          ref={featuredThree}
                          className="featured--img__three featured--img"
                          fluid={data.FeaturedImageThree.childImageSharp.fluid}
                          objectFit="contain"
                        />
                      </div>
                      <div className="featured-img--container">
                        <Img
                          ref={featuredOne}
                          className="featured--img__one featured--img"
                          fluid={data.FeaturedImageOne.childImageSharp.fluid}
                          objectFit="contain"
                        />
                      </div>
                      <div className="featured-img--container">
                        <Img
                          ref={featuredTwo}
                          className="featured--img__two featured--img"
                          fluid={data.FeaturedImageTwo.childImageSharp.fluid}
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
        </section>
        <div id="trigger"></div>
        <Reveal trigger={<div id="trigger"></div>}>
          <Tween
            from={{ visibility: "hidden", y: "100%" }}
            to={{ visibility: "visible", y: "0%" }}
            ease="Slow.easeIn"
            duration={3}
          >
            <footer className="footer--container">
              <div>
                <h3>Mike Willcox</h3>
              </div>
              <div className="form--container">
                <h4>Stay In Touch</h4>
                <p>Sign up to receive occasional updates on new work</p>
                <form className="form">
                  <div>
                    <input
                      type="email"
                      // value=""
                      name="EMAIL"
                      className="form--email"
                      id="mce-EMAIL"
                      placeholder="enter email address"
                      required
                    />
                  </div>
                  {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                  <div className="form--bot" aria-hidden="true">
                    <input
                      type="text"
                      name="b_aceee2c7e27b999a0a58660a5_98c67c3262"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Sign Me Up"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="form--submit"
                    />
                  </div>
                </form>
              </div>
              <div className="footer--links">
                <div>About</div>
                <div>FAQ</div>
                <div>Contact</div>
                <div>
                  <a href="http://instagram.com/mikewillcox">Instagram</a>{" "}
                </div>
              </div>
              <div>
                © {new Date().getFullYear()}, Built with{" "}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </footer>
          </Tween>
        </Reveal>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
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
    IbisImageThree: file(relativePath: { eq: "ibis-sun-v1.0-right.png" }) {
      childImageSharp {
        fixed(width: 685, height: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    FeaturedImageOne: file(relativePath: { eq: "nike-nyx-and-the-fates.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    FeaturedImageTwo: file(relativePath: { eq: "one-hand-on-the-ground.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    FeaturedImageThree: file(
      relativePath: {
        eq: "Past-Present-Future-Heart-9-6-lion-small_1340_c.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
