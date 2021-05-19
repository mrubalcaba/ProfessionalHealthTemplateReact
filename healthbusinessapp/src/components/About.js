import Footer from './Footer.js';

const About = () => {
    return (
        <div className="about-container">
            <h3>How my journey began</h3>
            <div className="about-content">
                <img className="about-img" src="./../images/person.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    e quisquam minus laborum asperiores, est obcaecati reiciendis
                    sapiente dignissimos provident omnis maxime eum incidunt 
                    possimus ratione distinctio numquam magni mollitia doloremque!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    e quisquam minus laborum asperiores, est obcaecati reiciendis</p>
            </div>
            <div className="about-people-container">
                <h3>What People Are Saying</h3>
                <div className="about-people people-quote">
                    <p>" Jessica taught me so much about a subject 
                        I thought I was already an expert on: myself! "</p>
                    <p>- KATY F.</p>
                </div>
                <div className="about-people people-quote">
                    <p>" I was able to rekindle certain relationships
                        with others from Jessica’s teachings. "</p>
                    <p>- ELIZABETH B.</p>
                </div>
                <div className="about-people confident-quote">
                    <p>" My confidence in the workplace has gotten so much better! "</p>
                    <p>- SARAH P.</p>
                </div>
                <div className="about-people confident-quote">
                    <p>" I let anxiety take over my life for too long. Now I have 
                        the strength to control my emotions. "</p>
                    <p>- VICTORIA G.</p>
                </div>
            </div>
            <div className="about-awards">
                <h4>Awards</h4>
                <p>Award One</p>
                <p className="second-award">Award Two</p>
                <p className="middle-award">Award Three</p>
                <p className="fourth-award">Award Four</p>
                <p>Award Five</p>
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
            <Footer/>
        </div>
    )
}

export default About
