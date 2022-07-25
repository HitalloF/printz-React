import React from 'react'
import styles from './styles/Footer.module.css';
import logo from '../img/logopz.png'
import icontt from '../img/tticon.png';
import iconinsta from '../img/instaicon.png';
import iconfb from '../img/fbicon.png';
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
          <li>um</li>
          <li>dois</li>
          <li>tres</li>
        </ul>
        <div>
      </div>
        <div>
          <h3>Contact</h3>
        </div>
        </div>
    </div>
    <div className='right'>
        MAP
    </div>
    </div>
    
    </section>
  )
}

export default Footer