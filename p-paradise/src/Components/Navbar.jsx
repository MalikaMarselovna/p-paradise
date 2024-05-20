import React from "react";
import {
  LocalMallOutlined,
  FavoriteBorderOutlined,
  HowToRegOutlined,
} from "@mui/icons-material";
import Logo from "../img/logo.svg";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search"; // Переименовали импорт
import { Link } from "react-router-dom";
import Auth from "./Auth/Auth";
import CartLink from "./CartLink/CartLink";
import Search from "./Search/Search"; // Оставили этот импорт без изменений

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] ease-in duration-600";

  return (
    <div className="navbar shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        {/* logo */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">
            <Link to="/">
              <img src={Logo} alt="logo" className="w-[40%] cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* left div */}
        {/* <div className="left flex flex-1 items-center">
          <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#f92e9e] transition-all">
            <input
              type="text"
              className="input outline-none w-[500px]"
              placeholder="What are you looking for?"
            />
            <SearchIcon className="text-[#f92e9e]" style={{ fontSize: "22px" }} />
          </div>
        </div> */}
        <Search />

        {/* right div */}
        <div className="right flex flex-1 items-center justify-end">
          <Auth className={style} />
          <button>
            <FavoriteBorderOutlined
              className="ml-3 text-[#f92e9e] hover:text-[#16ffbd] ease-in duration-600"
              style={{ fontSize: "35px" }}
            />
          </button>
          <CartLink className={style} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
