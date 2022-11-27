import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css";
import {useState} from "react";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Navbar cartCount={cartCount} setCartCount={setCartCount}/>
      <Header/>
      <Section cartCount={cartCount} setCartCount={setCartCount}/>
      <Footer/>
    </div>
  )
}

export default App;