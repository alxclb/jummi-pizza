import React, { useState, useContext, useMemo } from "react";
import "../CSS/AddToCart.css";
import { CartContext } from "../Context/CartContext";
import uuid from "react-uuid";

const AddToCart = ({ pizza }) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  let small = pizza.small;
  let medium = pizza.medium;
  let large = pizza.large;

  const [qty, setQty] = useState(0);
  const [item, setItem] = useState(false);
  const [pizzaCart, setPizzaCart] = useState({
    price: small,
    size: "small",
    cart: false,
    qty: 0,
  });

  //Choose Size
  const chooseItem = useMemo(() => chooseSize, [chooseSize]);
  function chooseSize(e) {
    let newSize = e.target.value;
    switch (newSize) {
      case "small":
        setPizzaCart({
          price: small,
          size: "small",
        });
        break;
      case "medium":
        setPizzaCart({
          price: medium,
          size: "medium",
        });
        break;
      case "large":
        setPizzaCart({
          price: large,
          size: "large",
        });
        break;
      default:
        setPizzaCart({
          price: small,
          size: "small",
        });
        break;
    }
  }
  //Qty button....increase, decrease qty
  function addQty() {
    let newQty = qty + 1;
    setQty(newQty);
    setItem(true);
  }
  function increaseQty() {
    let newQty = qty + 1;
    setQty(newQty);
  }
  function decreaseQty() {
    let newQty;
    qty < 1 ? (newQty = 0) : (newQty = qty - 1);
    if (newQty === 0) setItem(false);
    setQty(newQty);
  }

  const addItem = useMemo(() => addPiece, [addPiece]);
  function addPiece() {
    if (qty === 0) return;
    let piece = {
      cart_id: uuid(),
      id: pizza.id,
      name: pizza.name,
      desc: pizza.desc,
      link: pizza.link,
      price: pizzaCart.price,
      size: pizzaCart.size,
      cart: item,
      qty: qty,
    };
    cartProducts != null
      ? setCartProducts((prevState) => [...prevState, piece])
      : setCartProducts([piece]);
  }

  return (
    <>
      <div className="itm_menu_title">
        <label>Size</label>
        <label>Price</label>
      </div>
      <div className="itm_menu_list">
        <select id="size" onChange={chooseItem}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div id="price">
          <span>&#36;</span>
          <span style={{ paddingLeft: 0.15 + "em" }}>{pizzaCart.price}</span>
        </div>
      </div>
      <div className="itm_add_to_cart">
        <div className="qty_container">
          {item ? (
            <div className="add_container">
              <button
                id="btn-remove-item"
                className="btn_add"
                onClick={decreaseQty}
              >
                <span aria-labelledby="btn-remove-item" role="img">
                  &#10134;
                </span>
              </button>
              <div className="qty btn_qty_color">{qty}</div>
              <button
                id="btn-add-item"
                className="btn_add"
                onClick={increaseQty}
              >
                <span aria-labelledby="btn-add-item" role="img">
                  &#10133;
                </span>
              </button>
            </div>
          ) : (
            <button className="add_to_cart btn_qty_color" onClick={addQty}>
              Qty
            </button>
          )}
        </div>
        <button className="add_to_cart btn_add_to_cart_color" onClick={addItem}>
          Add To Cart
        </button>
      </div>
    </>
  );
};
export default AddToCart;
