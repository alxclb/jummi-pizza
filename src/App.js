import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Menu from './Layout/Menu';
import { ProductContext } from './Context/ProductContext';
import Order from './Layout/Order';
import { CartContext } from "./Context/CartContext";
import Checkout from "./Layout/Checkout";
import About from "./Layout/About";

function App() {

  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])

  const value = useMemo(() => ({ products, setProducts }), [products, setProducts]);
  const cartList = useMemo(() => ({ cartProducts, setCartProducts }), [cartProducts, setCartProducts]);

  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/"><button>Menu</button></Link>
            </li>
            <li>
              <Link to="/about/"><button>About</button></Link>
            </li>
          </ul>
        </nav>
        <ProductContext.Provider value={value}>
          <CartContext.Provider value={cartList}>
            <Route path="/" exact component={Menu} />
            <Route path="/checkout/" component={Checkout} />
            <Route path="/order/" component={Order} />
            <Route path="/about/" component={About} />
          </CartContext.Provider>
        </ProductContext.Provider>
      </div>
    </Router>
  );
}

export default App;
