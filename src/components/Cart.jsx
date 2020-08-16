import React, { useContext } from "react";
import "../CSS/Cart.css";
import "../CSS/Item.css";
import "../CSS/Checkout.css";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartProducts } = useContext(CartContext);
  const { cart_btn } = props;

  let cartList = cartProducts.map((pizza, index) => (
    <Item key={index} pizza={pizza} cancel={true}/>
  ));

  return (
    <div className="cart_container">
      {cartProducts.length < 1 ? (
        <div className="empty_cart">
          <h4>Your cart is empty</h4>
          <img
            src={require("../images/shopping-cart-icon1.png")}
            alt="Cart"
            width="150"
            height="150"
          />
        </div>
      ) : (
        <>
          <ul>{cartList}</ul>
          {cart_btn === "cart" ? (
            <div className="checkout_btn">
              <Link to="/checkout/">
                <button>Checkout</button>
              </Link>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
export default Cart;

//List element
const Item = ({ pizza, cancel }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  let id = pizza.cart_id;
  let removeProduct = () => {
    let remove = cartProducts.filter((x) => x.cart_id !== id);
    setCartProducts(remove);
  };

  let total = pizza.qty * pizza.price;
  return (
    <div className="cart_itm_container">
      <section className="itm_name">
        <h4>{pizza.name}</h4>
        <p>{pizza.desc}</p>
        <span>Size:</span>
        <span className="pizza_size">{pizza.size}</span>
      </section>
      <section className="itm_calc">
        <div>
          <span>{pizza.price}</span>
          <span>&#36;</span>
        </div>
        <div>
          <span>{pizza.qty}</span>
          <span>Qty</span>
        </div>
        <div>
          <span>Total:</span>
          <span>{total}</span>
          <span>&#36;</span>
        </div>
        <div>
          {cancel?
          <button className="cancel" onClick={removeProduct}>
            Cancel
          </button>
          :null}
        </div>
      </section>
    </div>
  );
};
export { Item };
