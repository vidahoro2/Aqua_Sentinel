import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Hidden } from '@material-ui/core';
import logo1 from '../../assets/images/creserLogo2.png';
import { fontFamily } from '@mui/system';
import './NavMui.css'
import { createTheme } from '@mui/material/styles';
import { useAuthContext } from "../../context/authContext"


const useStyles = makeStyles((theme) => ({
  

  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    backgroundColor: '#ffffff',
    maxHeight:'90px',
    boxShadow:' 0px 2px 4px rgba(0, 0, 0, 0.3)',
         
  },
  logo: {
    width: '35%',
    marginLeft: theme.spacing(2),

  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    alignItems: 'center',
  },
  loginButton: {

    padding: theme.spacing(1, 2),
    cursor: 'pointer',
    borderRadius: "30px",
    backgroundColor: "#840781",
    
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    boxShadow:' 0px 2px 4px rgba(0, 0, 0, 1)',
   
    [theme.breakpoints.only('md')]: {
      width: "150px",
      height: "40px",
    },
    [theme.breakpoints.only('lg')]: {
      width: "180px",
      height: "54px",
    },
    [theme.breakpoints.only('xl')]: {
      
    },
    [theme.breakpoints.only('xxl')]: {
      
    }
    
    
  },  logoutButton: {

    padding: theme.spacing(1, 2),
    cursor: 'pointer',
    borderRadius: "30px",
    backgroundColor: "#fffff",
    
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(5),
    boxShadow:' 0px 2px 4px rgba(0, 0, 0, 1)',
   
    [theme.breakpoints.only('md')]: {
      width: "150px",
      height: "40px",
    },
    [theme.breakpoints.only('lg')]: {
      width: "180px",
      height: "54px",
    },
    [theme.breakpoints.only('xl')]: {
      
    },
    [theme.breakpoints.only('xxl')]: {
      
    }
    
    
  },
  loginButton1: {

    padding: theme.spacing(1, 2),
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: "18px",
    boxShadow:' 0px 2px 4px rgba(0, 0, 0, 1)',
    backgroundColor: "#840781",
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(5),
   
    
  },
  logoutButton1: {

    padding: theme.spacing(1, 2),
    border: 'none',
    cursor: 'pointer',
    boxShadow:' 0px 2px 4px rgba(0, 0, 0, 1)',
    borderRadius: "18px",
    backgroundColor: "#ffffff",
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(5),
   
    
  }
}));

const NavbarR = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuthContext();
  const { logout } = useAuthContext();

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__left}>
        <img src={logo1} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.navbar__right}>
        <Hidden smDown>
          {/* Render these links for devices larger than or equal to small screens (sm) */}
          <ul className={classes.navLinks}>
            <li className={classes.link}>
              <a className='link' href="/escuelapadres">Escuela de Padres</a>
            </li>
            <li className={classes.link}>
              <a className='link' href="/private/academiadocentes">Academia Docente</a>
            </li>
           {/*  <li className={classes.link}>
              <a className='link' href="/colegiosfelices">Colegios CreSer</a>
            </li> */}
            <li className={classes.link}>
              <a className='link' href="/creserenelaula">CreSer en el Aula</a>
            </li>
            {/* <li className={classes.link}>
              <a className='link' href="/eventos">Eventos</a>
            </li> */}
            <li className={classes.link}>
              <a className='link' href="/contact">Contactanos</a>
            </li>
            {!isAuthenticated && (
              <button className={classes.loginButton}>
                <a className='linklog' href="/login">Inicia Sesión</a>
              </button>
            )}
            {isAuthenticated && (
              <button className={classes.logoutButton} onClick={logout}>
                <a className='linklogout' href="/login">Cerrar Sesión</a>
              </button>
            )}</ul>
          
        </Hidden>
        <Hidden mdUp>
        {!isAuthenticated && (
        <button className={classes.loginButton1}>
          <a className='linklog1' href="/login">Inicia Sesión</a></button>
        )}
        {isAuthenticated && (
        <button className={classes.logoutButton1} onClick={logout}>
          <a className='logoutButton1' href="/login">Cerrar Sesión</a></button>
        )}
        </Hidden>
      </div>
    </div>
  );
};

export default NavbarR;
