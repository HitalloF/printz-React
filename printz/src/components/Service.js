import React from 'react'
import Silk from '../img/services/silk.jpg'
import Bordado from '../img/services/bordado.png'
import Heat from '../img/services/heat.png'
import styles from './styles/Service.module.css'
const Service = () => {
  return (
    <section>
      <div className='container'>
      <div className={styles.silk}>
        <div className={styles.silktxt}>
        <h1>SILK CREEN</h1>
        <p>O silk screen, também chamado de serigrafia, é um processo de impressão.<br/> Nessa técnica, que pode ser realizada por uma pessoa, de forma mecânica,<br/>  ou automaticamente, por máquinas, a tinta é vazada, por meio da pressão de um rodo. Esse rodo é passado ao longo de um tela<br/>  (feito de nylon ou seda), que é esticada em um bastidor de madeira ou de aço.</p>
        </div>
        <div className={styles.silkimg}>
          <img src={Silk}></img>
        </div>
      </div>
      <div className={styles.bordado}>
      <div className={styles.bordadoimg}>
          <img src={Bordado}></img>
        </div>
        <div className={styles.bordadotxt}>
        <h1>BORDADO</h1>
        <p>O silk screen, também chamado de serigrafia, é um processo de impressão.<br/> Nessa técnica, que pode ser realizada por uma pessoa, de forma mecânica,<br/>  ou automaticamente, por máquinas, a tinta é vazada, por meio da pressão de um rodo. Esse rodo é passado ao longo de um tela<br/>  (feito de nylon ou seda), que é esticada em um bastidor de madeira ou de aço.</p>
        </div>

      </div>
      <div className={styles.heat}>
        <div className={styles.heattxt}>
        <h1>HEAT PRESS</h1>
        <p>O silk screen, também chamado de serigrafia, é um processo de impressão.<br/> Nessa técnica, que pode ser realizada por uma pessoa, de forma mecânica,<br/>  ou automaticamente, por máquinas, a tinta é vazada, por meio da pressão de um rodo. Esse rodo é passado ao longo de um tela<br/>  (feito de nylon ou seda), que é esticada em um bastidor de madeira ou de aço.</p>
        </div>
        <div className={styles.heat}>
          <img src={Heat}></img>
        </div>
      </div>
      <div className={styles.silk}></div>
      <div></div>
      </div>
</section>
  )
}

export default Service