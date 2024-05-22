import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);
  
  if (Object.keys(cart).length === 0) {
    return (
    <div className="Cart" >
      <h1 >Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
    )
  }
  if (!user) {
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  }

  return (
    <div className="Cart p-10" >
      <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]"> Your Cart</h1>
        <div className="flex items-center justify-between mt-4">
          <Link to="/" className="btn bg-white text-[#f92e9e] border-2 border-[#f92e9e] hover:bg-white hover:text-[#16ffbd] hover:border-[#16ffbd] mb-10">
            Continue Shopping
          </Link>
          </div>
      <CartList />
      <button className="order btn mt-20 text-center" onClick={() => setModalActive(true)}>Order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  )
}