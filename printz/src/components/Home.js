import React from 'react'
import maquina1 from '../img/home/maqui1.png'
import maquina2 from '../img/home/maqui2.png'
import faixa2 from '../img/faixa2.png';
import styles from './styles/Home.module.css';
import Galery from './Galery';
import Process from '../img/home/processo.png'
const Home = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - HOME';
  }, []);

  return (
    <section>
      <div  className={styles.maquinasg}>
        <div className={styles.centroimg}>
        <div className={styles.maquina}>
          <img src={maquina1} ></img>
        </div>
        <div className={styles.maquina}>
          <img src={maquina2} ></img> 
        </div>
        </div>
</div>
<div className={styles.maquinamobile}>
<div className={styles.maquina}>
      <img src={maquina1} ></img>
      </div>
      <div   className={styles.maquina}>
      <img src={maquina2} ></img> 
        </div>
</div>
      <div className='container'>

      </div>
        <div className={styles.faixa2}>
          <img src={faixa2}></img>
        </div>
        <div className={styles.galery}>
        <Galery />
        </div>
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