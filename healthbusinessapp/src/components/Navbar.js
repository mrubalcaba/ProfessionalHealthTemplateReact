import { useState } from "react";

const Navbar = () => {
    const [showNav, toggleNav] = useState(false);
    const toggle = () => {
        toggleNav(!showNav);
    }

    return (
    <nav className="desktop-nav">
        <img id="mobile-exit" className="mobile-menu-exit" src="./../images/cancel.svg" alt="Close Navigation"/>
        <ul className="primary-nav">
            <li className="current"><a href="/">You</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
            <li className="get-started-cta"><a href="/">Get Started</a></li>
        </ul>  
    </nav>
    )
}

export default Navbar
