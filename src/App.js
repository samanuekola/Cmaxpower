import Header from './components/Header';
import './App.css';
import Index from './components/Index';
import Footer from './components/Footer';
import Company from './components/Company';
import Products from './components/Products';
import Projects from './components/Projects'
import Services from './components/Services';
import {useEffect} from 'react'
import { Route, Routes} from 'react-router-dom';
function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
  useEffect(()=>{
    window.addEventListener("scroll", reveal);
  },[])
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
