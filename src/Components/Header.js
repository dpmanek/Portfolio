import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
        <div>
            <div className="header-wrapper">
            <div className="main-info">
                <Typed className="typed-text"
                 strings={["Node JS","React JS","Express JS","Mongo DB"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
                <h1>Developer</h1>
            </div>
            </div>
        </div>
    )
}

export default Header
