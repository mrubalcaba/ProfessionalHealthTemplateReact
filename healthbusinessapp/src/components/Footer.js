const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="left-footer">
                    <p>ALMAR BY MEL DEMO</p>
                    <h3>You belong here.</h3>
                    <p><a href="/">MADE WITH MELS HANDS :)</a></p>
                </div>
                <div className="right-footer">
                    <nav>
                        <ul className="footer-nav">
                            <li><a href="/">You</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Get Started</a></li> 
                        </ul>
                    </nav>
                    <nav>
                        <div className="footer-social">
                            <img src="./../images/instagram.svg" alt="Instagram"/>
                            <img src="./../images/twitter.svg" alt="Twitter"/>
                            <img src="./../images/pinterest.svg" alt="Pinterest"/>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
