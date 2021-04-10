

const Features = () => {
    return (
        <section className="features">
           <div className="container">
               <div className="marketing-img">
                    <img className="feature-img" src="./../images/women-in-nature.jpg" alt="Women in nature"/>
               </div>
                <div className="right-col col">
                    <h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus hendrerit diam in scelerisque efficitur. Class 
                        aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos. Fusce in elit non magna 
                        congue varius id eget erat. </h4>
                    <button className="learn-more">Learn More</button>
                </div>
            </div> 
            <div className="container">
                <div className="next-features-img">
                    <img className="feature-img" src="./../images/group-laughing.jpg" alt="Group laughing"/>
                </div>
                <div className="left-col col">
                    <h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus hendrerit diam in scelerisque efficitur. Class 
                        aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos.</h4>
                    <button className="learn-more friend-learn">Learn More</button>
                </div>
            </div> 
        </section>
    )
}

export default Features
