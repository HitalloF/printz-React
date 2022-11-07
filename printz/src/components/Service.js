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
<p>Screen printing can create a different visual output when compared to digital<br/>  printing. Screen printing ink is typically applied more thickly, resulting in longer-lasting,<br/>  brighter and more vibrant colours, even on darker backgrounds. For garment design<br/>  that requires a high level of vibrancy when printing on dark grounds, screen printing is <br/> still the best option</p>
    </div>
  </div>     
      </div>
      <div>
      <h2>HEAT PRESS</h2>
      <div>
        <p>A heat press is used to permanently apply a heat transfer to a surface. Common transfer types are Heat Transfer Vinyl cut with a vinyl cutter, Printable Heat Transfer Vinyl, Inkjet Transfer Paper, Laser Transfer Paper, Plastisol Transfers, and Sublimation.</p>
      </div>
      <div>
        <p>HTV works best on cotton or polyester or cotton/poly blends. Other synthetic fabrics, like acrylic, won't work correctly because they will melt under the heat of an iron. For more advanced crafters, you can apply HTV to mugs, baseball hats, footballs and even wood!</p>
      </div>



      </div>
        </div>

</section>
  )
}

export default Service