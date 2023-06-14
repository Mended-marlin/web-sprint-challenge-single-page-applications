import {Route, Routes, Link} from "react-router-dom"
import Order from "./components/Order"
import Home from "./components/Home"
import OrderConfirmation from "./components/OrderConfirmation";

import './App.css';
import './Home.css';
import './Order.css'
function App() {


  return (
    <div className="app">
      <nav>
            <p>BloomTech Pizza</p>

            <div>
            <Link className="navLink" to="/">Home</Link>
            <Link id="order-pizza" to="pizza">Order Now!</Link>
            </div>
              
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pizza" element={<Order />}/>
          {/* <Route path="pizza/confirmation" element={<OrderConfirmation />} /> */}
          <Route path="pizza/confirmation" element={<OrderConfirmation />}/>
        </Routes>  
        
        
      {/* <PromoBanner />
      <About />
      <Footer /> */}
    </div>
  )
}

export default App;
