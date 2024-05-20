import React from 'react'
import Products from '../Components/Products'


function CategoryPages() {
  return (
    <div>
        <div className='flex flex-col p-5'>
        <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]">Our Toys</h1>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex '>
                    <p>Filter by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option selected disabled>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <select  className='ml-3 border-2 border-silver'>
                        <option selected disabled>Color</option>
                        <option>White</option>
                        <option>Pink</option>
                        <option>Brown</option>
                        <option>Black</option>
                        <option>Gray</option>
                    </select>
                </div>
                <div className='flex'>
                    <p>Sort by</p>
                    <select className='ml-3 border-2 border-silver'>
                        <option>Newset (first)</option>
                        <option>Oldest (first)</option>
                        <option>Price (Asc)</option>
                        <option>Price (Des)</option>
                    </select>
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default CategoryPages