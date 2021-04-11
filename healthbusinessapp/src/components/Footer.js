const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="left-footer">
                    <p>ALMAR BY MEL DEMO</p>
                    <h2>You belong here.</h2>
                    <p><a href="/">MADE WITH MELS HANDS</a></p>
                </div>
                <div className="right-footer">
                    <nav>
                        <ul className="footer-nav">
                            <li><a href="/">You</a></li>
                            <li className="about-nav"><a href="/">About</a></li>
                            <li><a href="/">Get Started</a></li> 
                        </ul>
                    </nav>
                    <nav>
                        <div className="footer-social">
                            <img className="social-media" src="./../images/instagram.svg" alt="Instagram"/>
                            <img className="social-media twitter-social" src="./../images/twitter.svg" alt="Twitter"/>
                            <img className="social-media" src="./../images/pinterest.svg" alt="Pinterest"/>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
