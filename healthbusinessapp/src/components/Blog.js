import {Link} from 'react-router-dom';
import Footer from './Footer.js';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="blog-content">
                <p>Blog</p>
                <h1 className="blog-header">Cultivate and Motivate</h1>
                <p className="blog-header-text">Learnings, teachings and tips & tricks for 
                anyone to reference during difficult times, stressful workdays and moments 
                when manifesting your true self.</p>
            </div>
            <div className="blog-basic-grid">
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/get-started.jpg" alt="woman looking at phone for work"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>On Letting Go</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/railroad-walking.jpg" alt="word-breathe-nature"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>Toxic Relationships</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/boundaries.jpg" alt="word-breathe-nature"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>Setting Boundaries</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/insp-quote.jpg" alt="word-breathe-nature"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>Change for the Better</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/creative.jpg" alt="word-breathe-nature"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>It's Okay to Fail</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
                <article className="blog-article">
                    <Link to="/">
                        <img className="blog-img" src="./../images/say-si.jpg" alt="word-breathe-nature"/>
                    </Link>
                    <div className="blog-date">3/11/19</div>
                    <h1>Say Yes</h1>
                    <div className="blog-msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque 
                        ipsam sapiente, reprehenderit vel deserunt amet labore blanditiis 
                        sequi quos quasi, corrupti perferendis sed nisi provident aspernatur 
                    </div>
                    <a href="">Read More</a>
                </article>
            </div>
            <div className="blog-section-cta">
                <div className="blog-content-wrapper">
                    <div className="blog-content-cta">
                        <h2 className="journey-msg-header">Start your journey</h2>
                        <p className="journey-msg"> Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="blog-cta">
                            <a className="get-started-cta" href="/">Get Started</a>
                        </div>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
