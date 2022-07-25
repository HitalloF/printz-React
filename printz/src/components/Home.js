import React from 'react'
import faixa from '../img/faixa.png';
import faixa2 from '../img/faixa2.png';
import styles from './styles/Home.module.css';
import textimg from '../img/home/camisa.jpg'
import Galery from './Galery';
import Process from '../img/home/processo.png'
const Home = () => {
  return (
    <section>
      <div className={styles.faixa}>
    <img src={faixa} alt='faixa' />

    
      </div>
      <div className='container'>
      <div className={styles.boxtxt}>
        <div className={styles.text}>
        <h1>YOUR ONE STOP SHOP FOR MERCH</h1>
        <p>Money Merch is a customer-oriented print and design company based in Orange, CA.<br/> We specialize in screen printing, embroidery, DTG printing and fulfillment services for businesses, non-profit organizations, schools, bands, and sports leagues.<br/>  With over 10 years of experience, we pride our success on being at the frontiers of latest printing and embellishment trends. We source our products in bulk from reliable suppliers around the world,<br/>  and that allows us to provide high quality yet budget friendly services for our customers. Overall, we want to build our reputation on quality and unrivaled customer service.<br/>  Whether you are here as a first-time customer or are an esteemed repeat customer, we are here to make your printing experience one of a kind.</p>
        </div>
        <div className={styles.textimg}>
          <img src={textimg}></img>
        </div>
      </div>
      </div>
        <div className={styles.faixa2}>
          <img src={faixa2}></img>
        </div>
        <Galery />
        <div className={styles.processo}>
          <h1>OUR PROCESS</h1>
          <div className={styles.boximg}>
      <img src={Process} ></img>
      </div>
        </div>
    </section>
  )
}

export default Home