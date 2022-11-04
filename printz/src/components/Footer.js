import React from 'react'
import styles from './styles/Footer.module.css';
import logo from '../img/logopz.png'
import icontt from '../img/tticon.png';
import iconinsta from '../img/instaicon.png';
import iconfb from '../img/fbicon.png';
import map from '../img/map.png'
const Footer = () => {
  return (
    <section>

      <div className={styles.footer}>
    <div className={styles.left}>
    <div><img src={logo}></img></div>
    <div className={styles.social}>
    <div><img src={icontt}></img></div>
    <div><img src={iconinsta}></img></div>
    <div><img src={iconfb}></img></div>
    </div>

    <div className={styles.about  }>
      <h3>ABOUT</h3>
      <ul>
        <li>Portfolio</li>
        <li>FAQs</li>
        <li>Build a Quote</li>
        <li>Terms of Use</li>
      </ul>
    </div>
    </div>
    <div className='center'>
       <div className={styles.services}>
        <h3>Service</h3>
        <ul>
          <li ><a href='/service'>SILK CREEN</a></li>
          <li><a href='/service'>BORDADO</a></li>
          <li><a href='/service'>HEAT PRESS</a></li>
        </ul>
        <div>
      </div>
        <div>
          <h3>Contact</h3>
        </div>
        </div>
    </div>
    <div className={styles.right}>
        <div>
          <h3>MAP</h3>
        </div>
<a href='https://goo.gl/maps/ewTZp4k4WjZk8eFW9' target="_blank"><img src={map}></img></a>
        
    </div>
    </div>
    
    </section>
  )
}

export default Footer