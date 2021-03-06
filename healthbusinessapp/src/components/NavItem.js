import {Link} from 'react-router-dom';

const NavItem = ({path, selected, label, set}) => {
    return (
        <>
            <li>
                {selected ? 
                    <div className="navlink-selected">
                        <Link to={path}
                            style={{textDecoration: 'none', color: 'white'}}
                            onClick={set}>
                            {label}
                        </Link>
                    </div>
                    : 
                    <div className="navlink">
                        <Link to={path}
                            style={{textDecoration: 'none', color: 'white'}}
                            onClick={set}>
                            {label}
                        </Link>
                    </div>}    
            </li> 
        </>
    )
}

export default NavItem
