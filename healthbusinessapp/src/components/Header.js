

const Header = () => {
    return (
        <div className="navbar">
            <div className="person-background-img">
                <img src="./../images/person.jpg" alt="Person"/>
            </div>
            <div className="container">
                {/* want the header to reference the home page */}
                <div className="navbar-top">
                    <div className="logo" href="/">Almar</div>
                    {/* <header>Almar</header> */}
                    <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                </div>
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
                <section className="hero">
        
                    <h1>Find your happiness and learn to put it first.</h1>
                    {/* will reference the same as get started button in header */}
                    <p><a href="/">Chat with me</a></p>
                
                </section>
            </div>
        </div>
        
    )
}

export default Header
