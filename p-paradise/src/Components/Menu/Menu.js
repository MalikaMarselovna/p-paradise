import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu w-[100%] p-3 bg-[#f92e9e]">
      <ul className="flex flex-1 items-center justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/category">Our Products</Link>
        </li>
        <li>
          <Link to="/delivery">Delivery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
