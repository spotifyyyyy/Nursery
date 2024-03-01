

import About from './components/About';
import Video from './components/Video'
import NB from './components/NB'
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
// import Testhero from './components/Testhero';
import Flowers from './components/Flowers'
import Fruits from './components/Fruits'
import Contact from './components/Contact'
import Nursaryweb from './components/Nursaryweb'
import Others from './components/Others'







function App() {
  return (

   
   <>

   <BrowserRouter>
   <NB/>
   {/* <EmblaCarousel/>
   <About/>
   <Video/>
   <Footer/> */}
    
   <Routes>
    
   <Route path="/" element={<Home/>}> </Route>
   
   
   {/* <Route path="/EmblaCarousel" element={<EmblaCarousel/>}> </Route> */}
   <Route path="/About" element={<About/>}> </Route>
   <Route path="/Footer" element={<Footer/>}> </Route>
   <Route path="/flowers" element={<Flowers/>}> </Route>
   <Route path="/fruits" element={<Fruits/>}> </Route>
   <Route path="/contact" element={<Contact/>}> </Route>
   <Route path="/plants" element={<Nursaryweb/>}> </Route>
   <Route path="/others" element={<Others/>}> </Route>



   </Routes>
   <Footer/>
   </BrowserRouter>
   
   
   
    {/* // <NB/>
    // <EmblaCarousel/>
    // <About/>
    // <Video/>
    // <Footer/> */}
   </>
    
    


  );
}


export default App;
