import {Link, NavLink} from 'react-router-dom'
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import './navbar_prof.css';
import { Button1 } from '@mui/material';
import Logo from '../../assets/images/creserLogo2.png'
import {links_navbar} from '../../data_profile'



const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo"/>
            </Link>
        </div>
        <div>
                <ul className='nav__links'>
                    {
                        links_navbar.map(({name, path}, _index) =>{
                           return(
                            <li className="Button2-item">
                            <NavLink className="Button2-link" style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }} to={path}>{name}</NavLink>
                            </li>
                           ) 
                         
                        })
                    }
                    <Link to="/login" preventScrollReset={true}> 
                    <div className="Button1" style={{textAlign: "center"}}>
                        <p className="Button1-text">Iniciar Sesión</p>
                    </div>
                    </Link>
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

export default Navbar