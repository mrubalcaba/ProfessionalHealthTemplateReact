import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="nav-background-img">
                <img className="person-background-img" src="./../images/light-picture.jpg" alt="Person"/>
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
