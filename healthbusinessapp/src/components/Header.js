import Navbar from './Navbar'


const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-background-img">
                <img className="person-background-img" src="./../images/light-picture.jpg" alt="Person"/>
                <div className="navbar-top">
                    <div className="logo" href="/">Almar</div>
                    <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                </div>
                <section className="hero">
                    <h1>Find your happiness and learn to put it first.</h1>
                    {/* will reference the same as get started button in header */}
                    <p><div className="membership-redirect">Chat with me</div></p>
                </section>  
                <Navbar></Navbar>
            </div>
        </div>
        
    )
}

export default Header
