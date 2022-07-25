import React from 'react'
import Home from './Home'
import wallpaper from '../img/wallpaper.png'
import styles from './styles/Body.module.css';
const Body = () => {
  return (
    <section>
    <div className={styles.faixa}><img src={wallpaper}></img></div>
    <Home />
    </section>
  )
}

export default Body