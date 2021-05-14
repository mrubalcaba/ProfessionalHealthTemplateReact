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
                <div className="about-people">
                    <p>" Jessica taught me so much about a subject 
                        I thought I was already an expert on: myself! "</p>
                    <p>- KATY F.</p>
                    <p className="test">" I was able to rekindle certain relationships
                        with others from Jessica’s teachings. "</p>
                    <p>- ELIZABETH B.</p>
                </div>
                {/* <div className="about-people people-quote">
                    <p>" I was able to rekindle certain relationships
                        with others from Jessica’s teachings. "</p>
                    <p>- ELIZABETH B.</p>
                </div> */}
                <div className="about-people">
                    <p>" My confidence in the workplace has gotten so much better! "</p>
                    <p>- SARAH P.</p>
                </div>
                <div className="about-people">
                    <p>" I let anxiety take over my life for too long. Now I have 
                        the strength to control my emotions. "</p>
                    <p>- VICTORIA G.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
