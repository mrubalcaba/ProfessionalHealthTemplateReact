

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                {/* want the header to reference the home page */}
                <a className="logo" href="/">Almar</a>
                {/* <header>Almar</header> */}
                <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                <nav>
                    <img id="mobile-exit" className="mobile-menu-exit" src="./../images/cancel.svg" alt="Close Navigation"/>
                    <ul className="primary-nav">
                        <li className="current"><a href="/">You</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        
                    </ul>
                    <ul className="secondary-nav">
                        <li><a href="/">Login</a></li>
                        <li className="get-started-cta"><a href="/">Get Started</a></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}

export default Header
