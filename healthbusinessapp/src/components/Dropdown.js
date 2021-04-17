const Dropdown = ({toggle}) => {
    
    return (
        <div className="exit-container">
            <button className="navbar-toggler exit-toggler" onClick={toggle} type="button" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                    aria-expanded="false" aria-label="Toggle Navigation">
                        <img id="mobile-exit" className="mobile-menu-exit" src="./../images/cancel.svg" alt="Close Navigation"/>
            </button>
            <ul className="dropdown-menu">
                        <li className="current"><a href="/">You</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a className="get-started-dropdown" href="/">Get Started</a></li>
            </ul>
        </div>
    )
}

export default Dropdown
