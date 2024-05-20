import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders || orders.length === 0) {
    return <div>No orders found.</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  const output = orders.map(order => {
    if (!order.cart) {
      return <div key={order.id}>Invalid order data.</div>;
    }

    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);

      if (!product) {
        return (
          <div className="product" key={productId}>
            Product not found
          </div>
        );
      }

      return (
        <div className="product" key={product.id}>
          <li>
            <div className="product-name">{product.name}</div>
            <div>Amount: <span>{order.cart[productId]}</span></div>
            <div>Price: <span>{product.price}$</span></div>
            <div>Total price: <span>{order.cart[productId] * product.price}$</span></div>
          </li>
        </div>
      );
    });

    return (
      <ul className="Order" key={order.id}>
        <li>Name: <span>{order.name}</span></li>
        <li>Phone: <span>{order.phone}</span></li>
        <li>Address: <span>{order.address}</span></li>
        <li>Orders:
          <ul>
            {cartOutput}
          </ul>
        </li>
        <hr />
      </ul>
    );
  });

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}
