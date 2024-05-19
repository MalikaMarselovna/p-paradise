import React, { useState } from 'react';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

function Product({ item }) {
  const [hoverEffect, setHoverEffects] = useState(' opacity-0');

  const handleHoverEnter = () => {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]');
  };

  const handleHoverExit = () => {
    setHoverEffects(' opacity-0');
  };

  const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#16ffbd] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor:pointer';

  return (
    <div
      className='flex flex-1 items-center justify-center min-w-[280px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative'
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_image" className='w-[100%] h-[100%] overflow-hidden rounded-md' />
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100${hoverEffect}`}>
        {/* icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}

export default Product;
