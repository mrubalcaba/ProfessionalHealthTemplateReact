const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <header className="newsletter-header">
                <h2 className="newsletter-header-title">Newsletter Sign-up</h2>
                <div className="newsletter-header-description">
                    <p>Sign up with your email address to receive news and updates.</p>
                </div>
            </header>
            <div className="newsletter-name-email">
                <div action="name" className="newsletter-form">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name"/>

                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email Address"/>

                    <input type="submit" className="signup-cta" value="Sign Up"/>
                </div>
            
            </div>
            <p className="privacy-note">We respect your privacy.</p>
            
        </section>
    )
}

export default Newsletter
