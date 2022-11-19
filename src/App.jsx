import React from 'react'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
     
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
     </BrowserRouter>
    
  )
}

export default App
