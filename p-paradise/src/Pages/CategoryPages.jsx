import React from 'react'
import Products from '../Components/Products'
import Categories from '../Components/Categories'


function CategoryPages() {
  return (
    <div className='flex flex-col p-5'>
       
        <h1 className="text-5xl font-bold mb-4 flex justify-center text-[#f92e9e]">Our Cute Toys</h1>
        <Categories/>
        <Products/>
    </div>
  )
}

export default CategoryPages