import Navbar from './Navbar';
import Header from './Header';
import Product from './Product';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0)

  const addToCart=()=>{
    document.querySelector(".anchor").innerText="Add to cart"
    
    setCount(count+1);
    document.querySelector(".anchor").innerText="Remove from cart"
    
    
      setCount(count-1);
   
    
  };

  return (
    <div>
      <Navbar count={count}/>  
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
