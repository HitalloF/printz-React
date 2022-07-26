import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  
import Head from "./components/Head";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";   
import Body from "./components/Body";
function App() {
  return (
    <div>
      <Head />
    <Routes>  
       <Route path='/' element={<Body />} />
       <Route path='/service' element={<Service/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact />}/>
    </Routes>

    <Footer/>
   </div>
  );
}

export default App;
