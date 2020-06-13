import React, { useState } from "react"
// import Mark from "../assets/images/mark-clean-v1.0.2.svg"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosMenu, IoIosClose } from "react-icons/io"

const PrimaryMenu = ({ width }) => (
  <ul className="nav--items">
    <li className="nav--item">
      <AniLink fade to="">
        Home
      </AniLink>
    </li>
    <li className="nav--item">
      <AniLink fade to="/about">
        About
      </AniLink>
    </li>
  </ul>
)

const PrimaryNav = () => {
  const width = 700
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="nav">
      <div className="mark">
        {width > 800 ? (
          <div className="h5">Northern Wind & Souther Sun</div>
        ) : undefined}
        <AniLink fade to="">
          <h4>Mike Willcox</h4>
        </AniLink>
      </div>
      {width > 800 ? (
        <ul className="nav--items">
          <li className="nav--item">
            <AniLink fade to="">
              Home
            </AniLink>
          </li>
          <li className="nav--item">
            <AniLink fade to="/about">
              About
            </AniLink>
          </li>
          <li className="nav--item">
            <AniLink fade to="/cases">
              Cases
            </AniLink>
          </li>
          <li className="nav--item">
            <AniLink fade to="/Method">
              Method
            </AniLink>
          </li>
          <li className="nav--item">
            <AniLink fade to="services">
              Services
            </AniLink>
          </li>
        </ul>
      ) : (
        <>
          <div className="sidenav--toggle">
            {!showMenu ? (
              <IoIosMenu onClick={() => setShowMenu(!showMenu)} />
            ) : (
              <IoIosClose onClick={() => setShowMenu(!showMenu)} />
            )}
          </div>
          {showMenu ? (
            <div className="sidenav--primary">
              <PrimaryMenu width={width} />
            </div>
          ) : undefined}
        </>
      )}
    </nav>
  )
}

export default PrimaryNav
