
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="nav-background-img">
                <img className="hero-background-img" src="./../images/mountains.jpg" alt="Person"/>
                <section className="hero">
                    <h1>Find your happiness and learn to put it first.</h1>
                    {/* will reference the same as get started button in header */}
                    <p><div className="membership-redirect">Chat with me</div></p>
                </section>  
            </div>
        </div>
        
    )
}

export default Hero
