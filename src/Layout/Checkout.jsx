import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "../CSS/Checkout.css";

import { Link } from "react-router-dom";
import Cart from "../components/Cart";

const Checkout = () => {
  const { cartProducts } = useContext(CartContext);
  const [user, setUser] = useState("");
  const [loc, setLoc] = useState("");
  const [phone, setPhone] = useState("");
  const delivery = 5;

  // let itemCount = cartProducts.reduce(
  //   (total, product) => total + product.qty,
  //   0
  // );
  let subtotal = cartProducts
    .reduce((total, product) => total + product.price * product.qty, 0)
    .toFixed(2);
  let total = parseInt(subtotal) + delivery;

  let handleInput = (e) => {
    let field = e.target.id;
    let value = e.target.value;
    switch (field) {
      case "username":
        setUser(value);
        break;
      case "location":
        setLoc(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  //params for link
  const toOrder = {
    pathname: "/order/",
    user: user,
    loc: loc,
    phone: phone,
    cart: cartProducts,
    subtotal: subtotal,
    delivery: delivery,
    total: total,
  };

  let cartCheck;
  cartProducts.length > 0 ? (cartCheck = true) : (cartCheck = false);
  return (
    <div className="chk_container">
      <section className="chk_cart_container">
        <Cart />
      </section>
      {cartCheck ? (
        <section className="chk_section">
          <section>
            <div>
              <span>Sub Total</span>
              <span>
                {subtotal} <span>&#36;</span>
              </span>
            </div>
            <div>
              <span>Delivery Charges</span>
              <span>
                {delivery}
                <span>&#36;</span>
              </span>
            </div>
            <div>
              <span>Total Amount</span>
              <span>
                {total}
                <span>&#36;</span>
              </span>
            </div>
          </section>
          <section className="user_loc">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={handleInput} />
            <label htmlFor="location">Delivery Address</label>
            <input type="text" id="location" onChange={handleInput} />
            <label htmlFor="phone">Contact Details(Phone)</label>
            <input type="text" id="phone" onChange={handleInput} />
            <section className="order_btn">
              <Link to={toOrder}>
                <button>Place Order</button>
              </Link>
            </section>{" "}
          </section>
        </section>
      ) : (
        <div className='back_link'>
          <Link to="/">Go Back to Main Menu</Link>
        </div>
      )}
    </div>
  );
};
export default Checkout;
