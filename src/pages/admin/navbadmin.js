import {Link, NavLink} from 'react-router-dom'
import './navadmin.css';
import Logo from '../../assets/images/creserLogo2.png'
import {links_navbaradmin } from './admin_data'

const NavbarAdmin = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/private/admin" className='logo'>
                <img src={Logo} alt="Nav Logo"/>
            </Link>
        </div>
        <div>
                <ul className='nav__links'>
                    {
                        links_navbaradmin.map(({name, path}, _index) =>{
                           return(
                            <li className="Button2-item">
                            <NavLink className="Button2-link" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} to={path}>{name}</NavLink>
                            </li>
                           ) 
                         
                        })
                    }
                    <Link to="/login" preventScrollReset={true}> 
                    <div className="Button3" style={{textAlign: "center"}}>
                        <p className="Button3-text">Cerrar Sesión</p>
                    </div>
                    </Link>

                </ul>
                <button className="nav__toggle-btn"></button>
        </div>
       
    </nav>
  )
} 

export default NavbarAdmin