import { useContext, useState } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import "./Product.css";

export default function Product() {
  const match = useMatch("/products/:slug");
  const { products } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!match) {
    return <NotFound />;
  }

  const { params } = match;
  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center mb-10 mt-10">
      <div>
        <img 
          src={product.picture} 
          alt={product.name} 
          className="w-[470px] h-[600px] rounded-lg shadow-lg hover:scale-[1.04] ease-in duration-300 cursor-pointer"
          onClick={openModal}
        />
      </div>
      <div className="ml-10 flex-[1.3] flex items-start justify-items-start flex-col mt-10 mb-10">
        <h1 className="title text-[40px] text-[#f92e9e]"><strong>{product.name}</strong></h1>
        <p className="mt-7 text-3xl"><strong>Price:</strong> {product.price}$</p>
        <p className="text-[18px]"><span className="flex text-2xl mt-7">Description:</span> {product.description}</p>
        <div className="flex text-2xl mt-7">
          Colors:
          <div className="bg-pink-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
          <div className="bg-sky-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
          <div className="bg-white-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
          <div className="bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#f92e9e]"></div>
        </div>
        <div className="mt-7 text-2xl mb-10">
          Size:
          <select className="ml-5 border-2 border-[#f92e9e] rounded-md outline-none w-[150px]">
            <option selected disabled>Select</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <AddToCart product={product} />
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={product.picture} alt={product.name} className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
