import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  const onQuantityChange = (product, qty) => {
    if (qty >= 0 && qty <= 100) {
      setCart({
        ...cart,
        [product.id]: qty,
      });
    }
  };

  const onItemRemove = (product) => {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  };

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>

        <div className="inputs mr-10 w-[400px]">
          <div className="shadow-md mr-10 flex">
            <button
              onClick={() => onQuantityChange(product, cart[product.id] - 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md outline-none"
            >
              -
            </button>
            <input
              className="text-center flex items-center justify-center border-[1px] border-[#f92e9e] outline-none w-[120px]"
              name="num"
              type="number"
              value={cart[product.id]}
              min={0}
              onChange={(event) =>
                onQuantityChange(product, parseInt(event.target.value, 10))
              }
            />
            <button
              onClick={() => onQuantityChange(product, cart[product.id] + 1)}
              className="bg-[#f92e9e] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md outline-none"
            >
              +
            </button>
          </div>
          <span>${(cart[product.id] * product.price).toFixed(2)}</span>
          <i
            className="fa-solid fa-xmark cursor-pointer text-[#f92e9e]"
            onClick={() => onItemRemove(product)}
          />
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}

