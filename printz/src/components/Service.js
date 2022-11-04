import React from 'react'
import Silk from '../img/services/silk.jpg'
import Bordado from '../img/services/bordado.png'
import Heat from '../img/services/heat.png'
import styles from './styles/Service.module.css'
const Service = () => {


  React.useEffect(() => {
    document.title = 'PrintZInk - SERVICE';
  }, []);

  
  return (
    <section>
      <div className='container'>
   
   <div className={styles.title}>   <h1>SILK CREEN</h1>
      <div className={styles.silk}>
        <div className={styles.silktxt}>
        <h2>The silkscreen </h2>
        <p>Is a layer of ink trace used to identify the PCB components, marks, logos,<br/> symbols, and so on. If you see, a PCB comprises two parts – components and soldering. <br/> Mostly, the silkscreen is applied to the component part of the PCB. Nowadays, it is also applied <br/> to the soldering part,<br/></p>
        
        <h2>Advantages of Silkscreen Printing</h2>
        <ul>
       <li>•	Cheap for large quantity printing.</li> 
       <li>•	Cost effective when fewer ink colors are needed (i.e. 1 or 2 colours).</li> 
       <li>•	Designs can be very detailed (e.g. small text, fine lines).</li> 
        </ul>

        <h2>Creates Unique and Authentic Outputs</h2>
Screen printing can create a different visual output when compared to digital<br/>  printing. Screen printing ink is typically applied more thickly, resulting in longer-lasting,<br/>  brighter and more vibrant colours, even on darker backgrounds. For garment design<br/>  that requires a high level of vibrancy when printing on dark grounds, screen printing is <br/> still the best option
    
    
        </div>
        <div className={styles.silkimg}>
        <h2>Cost-Efficient & Yields Large Volumes</h2>
    Screen printing can create a different visual output when comhpared to digital <br/>printing. Screen printing ink is typically applied more thickly, resulting in <br/>longer-lasting, brighter and more vibrant colours, even on<br/> darker backgrounds. For garment design that requires a high<br/> level of vibrancy when printing on dark grounds, <br/>screen printing is still the best option.
    <h2>Very Versatile</h2>
    Screen printing accommodates a wide range of materials, including vinyl, fabric,<br/>  rigid plastic, foam board, metal, glass and many others. The printer can produce <br/> different products, such as banners, T-shirts, hats, posters and wallpapers using the same screens. <br/> It is also not limited by size or shape, so distinctive shapes like<br/>  those of mugs and bottles can be designed using this printing method.
      
      <h2>Provides Long-lasting, High Quality Results</h2>
      <p>The ability of the screen printing ink, like water based inks, to bond to the material of<br/> the garment can result in a much more durable graphic compared to digital printing.<br/> Heat cured screen prints are durable enough to handle repeat <br/>washing without cracking or fading.</p>
      
        </div>
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