import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Works';
import {Routes, Route } from "react-router-dom";
import Pricing from './components/Pricing';
import Order from './components/Order';
function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>} />        
        <Route path='/Pricing' element={<Pricing/>} />
        <Route path='/works' element={<Work/>} />     
        <Route path='/Order' element={<Order/>} />        
      </Routes>
    </div>
  );
}

export default App;
