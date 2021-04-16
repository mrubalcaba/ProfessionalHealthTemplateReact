const PrimaryNav = () => {
    
    return (
        <div>
            <ul className="dropdown-menu">
                        <li className="current"><a href="/">You</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Login</a></li>
                        <li><a className="get-started-dropdown" href="/">Get Started</a></li>
            </ul>
        </div>
    )
}

export default PrimaryNav
