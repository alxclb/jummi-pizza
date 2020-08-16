import React from "react";
import "../CSS/Card.css";
import AddToCart from "./AddToCart";

const Card = ({ pizza }) => {
  let name = pizza.name || "aaa";
  let description = pizza.description || "aaa";
  let link = pizza.link || "aaa";

  return (
    <div className="card_container">
      <div className="img_container">
        <section className="img_wrapper">
          <img src={link} alt="pizza" />
        </section>
        <section className="itm_container">
          <article className="itm_desc">
            <span className="itm_title">{name}</span>
            <span className="itm_text">{description}</span>
          </article>
          <AddToCart pizza={pizza} />
        </section>
      </div>
    </div>
  );
};

export default Card;
