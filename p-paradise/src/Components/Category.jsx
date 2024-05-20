import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteCategory from './DeleteCategory/DeleteCategory';

function Category({ category }) {
  return (
    <li key={category.id}>
      <div className="card flex-1 m-2 shadow-lg rounded-md overflow-hidden relative hover:scale-[1.03] w-[300px] h-[350px]">
        <img src={category.src} className="w-[100%]" alt={category.name} />
        <div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col">
          <h2 className="text-white font-medium text-[30px]">{category.name}</h2>
          <NavLink to={"/categories/" + category.slug} className="btn">See More
          </NavLink>
        </div>
      </div>
      <DeleteCategory category={category} />
    </li>
  );
}

export default Category;
