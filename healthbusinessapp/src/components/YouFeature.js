import Navbar from "./Navbar";
import Footer from "./Footer";

const YouFeature = () => {
    return (
        <div>
            <Navbar>
                <div className="you-feature-container">
                    <div className="you-background-img">
                        <img src="./../images/mountains.jpg" alt="person" className="you-background-img"/>
                        <section className="you-content">
                            <p>Journey 1 - Relationship with You</p>
                            <h1>You belong here just as much as anyone else.</h1>
                        </section>
                    </div>
                </div>
                <Footer/>
            </Navbar>
        </div>
    )
}

export default YouFeature
