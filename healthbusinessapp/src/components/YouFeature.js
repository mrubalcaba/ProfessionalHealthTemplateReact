import Footer from "./Footer";

const YouFeature = () => {
    return (
            <div className="you-feature">
                <div className="you-feature-container hero-container">
                    <div className="you-background-img nav-background-img">
                        <img src="./../images/lifestyle.jpg" alt="person" className="hero-background-img you-hero-background-img"/>
                        <section className="you-content hero">
                            <p>Journey 1 - Relationship with You</p>
                            <h1>You belong here just as much as anyone else.</h1>
                        </section>
                    </div>
                </div>
                <div className="you-ex-features">
                    <h2>Focusing on You</h2>
                    <div className="ex-features">
                        <h3>01 - Example Feature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui quam, varius at mi at, faucibus.</p>
                        <h3>02 - Example Feature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui quam, varius at mi at, faucibus.</p>
                        <h3>03 - Example Feature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui quam, varius at mi at, faucibus.</p>
                        <h3>04 - Example Feature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui quam, varius at mi at, faucibus.</p>
                    </div>
                </div>
                <div className="feature-msg">
                    <div className="feature-img-background">
                        <img src="./../images/creative.jpg" alt="person" className="you-feature-img"/>
                        <section className="you-feature-content">
                            <h1>If you face your flaws, you’ll notice the change.</h1>
                            <p>Lorem ipsum dolor sit amet nullam vel ultricies metus.</p>
                        </section>
                    </div>
                </div>
                <div className="you-get-started">
                    <h1>Start a new relationship with yourself now.</h1>
                    <div className="free-chat-cta">Free 30-min chat</div>
                </div> 
                <Footer/>
           </div>
       
    )
}

export default YouFeature
