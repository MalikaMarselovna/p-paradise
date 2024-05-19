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
    <div className="AddToCart">
      <button className="btn" onClick={onAddToCartClick}>
        Add To Cart
        
      </button>
      {cart[product.id] ? cart[product.id] : 0}
    </div>
  );
}