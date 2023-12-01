import React, { useState } from "react";
import { TLAT } from "../data/TLAT.jsx";
import Icon_Incart from "/icon-header/icon_incart.svg";

const AddCart = () => {
  const [products, setProducts] = useState([
    (id = " "),
    (name = " "),
    (price = " "),
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const found = updatedCart.find((item) => item.id === product.id);

    if (found) {
      found.quantity++;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };
  return (
    <>
      <div>
        <h2>Danh sách sản phẩm</h2>
        <ul>
          {TLAT.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>
                Thêm vào giỏ hàng
              </button>
            </li>
          ))}
        </ul>

        <h2>Giỏ hàng</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - Số lượng: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddCart;
