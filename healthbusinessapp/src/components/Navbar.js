import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = (props) => {
    const [show, showToggle] = useState(false);
    const toggle = () => {
        showToggle(!show);
    }

    return (
        
    <div>
        
        <nav className="desktop-nav">
            <div className="navbar-container container">
                <a className="logo" href="/">Almar</a>
                {show ? null : <button className="navbar-toggler menu-toggler" onClick={toggle} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                aria-expanded="false" aria-label="Toggle Navigation">
                    <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                </button>}
               {show ? <Dropdown toggle={toggle}/> : null}
                <div className="navbar-collapse" id="navbarResponsive">
                    <ul className="primary-nav">
                        <li className="current"><a href="/">You</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a className="get-started-cta" href="/">Get Started</a></li>
                    </ul>
                </div>
            </div>  
        </nav>
        {props.children}
    </div>
    )
}

export default Navbar
