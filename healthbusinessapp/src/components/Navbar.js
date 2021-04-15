import { useState } from "react";

const Navbar = (props) => {
    return (
    <div>
        <nav className="desktop-nav">
            <div className="container">
                {/* <div className="navbar-top"> */}
                    <a className="logo" href="/">Almar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                    aria-expanded="false" aria-label="Toggle Navigation">
                        <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                    </button>
                {/* </div> */}
                <div className="navbar-collapse" id="navbarResponsive">
                    {/* <img id="mobile-exit" className="mobile-menu-exit" src="./../images/cancel.svg" alt="Close Navigation"/> */}
                    <ul className="primary-nav">
                        <li className="current"><a href="/">You</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                        <li className="get-started-cta"><a href="/">Get Started</a></li>
                    </ul>
                </div>
            </div>  
        </nav>
        {props.children}
    </div>
    )
}

export default Navbar
