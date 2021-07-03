import { useState } from "react";
import {Link} from 'react-router-dom';
import Dropdown from "./Dropdown";
import NavItem from "./NavItem";
import Login from "./Login";

const Navbar = ({show, toggle, children, login, loginPage}) => {
    //navitem pages
    const [selected, showSelected] = useState({you:false, blog:false, about:false, contact:false});

    const selectYou = () => {
        if(selected.you === false){
            showSelected({you:!selected.you, blog:false, about:false, contact:false});
        } 
        
    }
        
    const selectBlog = () => {
        if(selected.blog === false) {
            showSelected({you:false, blog:!selected.blog, about:false, contact:false});
        }
    }

    const selectAbout = () => {
        if(selected.about === false){
            showSelected({you:false, blog:false, about:!selected.about, contact:false});
        }
    }

    const selectContact = () => {
        if(selected.contact === false){
            showSelected({you:false, blog:false, about:false, contact:!selected.contact});
        }
    }

    const selectHome = () => {
        showSelected({you:false, blog:false, about:false, contact:false});
    }

    console.log(selected);
    return ( 
        <div>
            <nav className="desktop-nav">
                <div className="navbar-container container">
                    <Link className="logo" to="/" onClick={selectHome}>Almar</Link>
                    {show ? null : <button className="navbar-toggler menu-toggler" onClick={toggle} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                    aria-expanded="false" aria-label="Toggle Navigation">
                        <img id="mobile-cta" className="mobile-menu" src="./../images/menu.svg" alt="Open Navigation"/>
                    </button>}
                {show ? <Dropdown toggle={toggle}/> : null}
                    <div className="navbar-collapse">
                        <ul className="primary-nav"> 
                            <NavItem path={'YouFeature'} selected={selected.you} label={'You'} set={selectYou}></NavItem>
                            <NavItem path={'Blog'} selected={selected.blog} label={'Blog'} set={selectBlog}></NavItem>
                            <NavItem path={'About'} selected={selected.about} label={'About'} set={selectAbout}></NavItem>
                            <NavItem path={'Contact'} selected={selected.contact} label={'Contact'} set={selectContact}></NavItem>
                            <li><div className="login" onClick={loginPage}>Login</div></li> 
                            {login ? <Login/> : null}
                            <li><a href="/">Get Started</a></li>
                        </ul>
                    </div>
                </div>  
            </nav>
            {children}
        </div>
    )
}

export default Navbar
