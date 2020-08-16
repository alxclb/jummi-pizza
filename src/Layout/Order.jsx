import React from "react";
import { Item } from "../components/Cart";
import { Link } from "react-router-dom";
import '../CSS/Order.css'

const Order = (props) => {

  let customer = props.location.user;
  let location = props.location.loc;
  let phone = props.location.phone;
  let cart = props.location.cart;
  let subtotal = props.location.subtotal;
  let delivery = props.location.delivery;
  let total = props.location.total;
  console.log(total)

  let cartList;
  cart?
  cartList = cart.map((pizza, index) => (
    <Item key={index} pizza={pizza} />
  )): cartList=''
  return (
    <div className='order_container'>
      {cart?
      <>
      <h2>Your order have been processed</h2>
      <div className='total_cost'><span>Customer:</span><span>{customer}</span></div>
      <div className='total_cost'><span>Delivery Address:</span><span>{location}</span></div>
      <div className='total_cost'><span>Delivery Details (Phone):</span><span>{phone}</span></div>
      <div>
          {cartList}
      </div>
      <div className='total_cost'><span>Subtotal:</span><span>{subtotal}<span>&#36;</span></span></div>
      <div className='total_cost'><span>Delivery Cost:</span><span>{delivery}<span>&#36;</span></span></div>
      <div className='total_cost'><span>Total:</span><span>{total}<span>&#36;</span></span></div>
      </>
      : <><h2>Your cart is empty</h2>
          <Link to='/'>Go Back to Main Menu</Link>
        </>}
    </div>
  );
};
export default Order;