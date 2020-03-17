import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="navigation">
          <Link to="/about">link 1</Link>
          <Link to="/work">link 2</Link>
          <Link to="/contact">link 3</Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
