import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import Category from './Category';
import AddCategory from './AddCategory/AddCategory';

function Categories() {
  const { categories } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center p-5">
      <ul className="flex">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
        <AddCategory />
      </ul>
    </div>
  );
}

export default Categories;

