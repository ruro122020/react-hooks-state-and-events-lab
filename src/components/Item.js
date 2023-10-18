import React, {useState} from "react";

function Item({ name, category }) {
  const [addClass, setAddClass] = useState(false)
  const addItemToCart =()=>{
    setAddClass(!addClass)
  }
  return (
    <li className={addClass ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{addClass ? 'Remove From Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
