import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/Head.module.css';
import { NavLink, } from 'react-router-dom';
import logo from '../img/logopz.png'

const Head = () => {
  let activeStyle = {
    textShadow: "0 0 10px #FFFFFF", 
    textDecoration: "underline",
    color: "#FFFFFF",
  };

  let activeClassName = "underline";


  return (
    <section className={styles.head} >


      <ul className={styles.menu}>
        
        <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/'  >HOME</NavLink>

        <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/service' >SERVICE</NavLink>
        
        <img src={logo} alt='' />

        <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/about' >ABOUT</NavLink>

        <NavLink  style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to='/contact' >CONTACT</NavLink>

      </ul>

    </section>
  )
}

export default Head