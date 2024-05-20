import "./AddToCart.css";
import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  return (
    <div className="AddToCart mt-[-15px]">
      <button className="Cart_ic" onClick={onAddToCartClick}>
      </button>
    <b className="text-white absolute mt-[-25px] ml-[5px] text-x">  {cart[product.id] ? cart[product.id] : 0}</b>
    </div>
  );
}