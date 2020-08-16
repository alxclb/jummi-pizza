import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import "../CSS/Menu.css";
import Cart from "../components/Cart";
import { ProductContext } from "../Context/ProductContext";
import { getAllProducts } from "../utils/service";

const Menu = () => {
  const { products, setProducts } = useContext(ProductContext);

  //Fetch all products
  useEffect(() => {
    async function data() {
      const items = await getAllProducts().then((res) => res.data);
      setProducts(items);
    }
    data();
  }, [setProducts]);

  //List all products
  let menu;
  products != null
    ? (menu = products.map((pizza) => <Card key={pizza.id} pizza={pizza} />))
    : (menu = <h1>Loading</h1>);

  return (
    <div className="menu_container">
      <section className="menu_list">{menu}</section>
      <section className="cart_list">
        <Cart cart_btn={"cart"} />
      </section>
    </div>
  );
};
export default Menu;
