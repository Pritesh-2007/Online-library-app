import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import bookcontext from './utils/BookContext';
import Card from './Card';
import { useSelector } from 'react-redux';
function HomePage ()
{
  const bookcategory=useContext(bookcontext);
  const categoriesarray = ["fiction","non-fiction","Sci-fi"];
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => { 
    setSelectedCategory(event.target.value);
    setCategory(event.target.value);

   };
 
  const BOOKDATA=useSelector((store)=>store.Book.items);
  const popularBooks =BOOKDATA.slice(6,13);
  const {setCategory}=useContext(bookcontext);
  return (
    <div className="p-4 bg-white shadow rounded flex flex-col flex-grow"> 
    <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Our Online Library</h1> 
    <h2 className="text-xl font-semibold mb-2">Book Categories</h2>
      <select value={selectedCategory} onChange={handleCategoryChange} className="block w-full p-2 border rounded mb-4"> 
        {
            categoriesarray.map((category, index) => 
         ( <option key={index} value={category}>{category.toUpperCase()}</option> ))
          } 
          </select>
           {selectedCategory && ( <div className="mb-4 p-2 bg-blue-50 rounded">
             <h3 className="text-lg font-medium">Selected Category: <span className='text-red-500'>{selectedCategory.toUpperCase()}</span> click on  Brows Books Link of selected category</h3> 
           </div>
          )}
          <h2 className="text-xl font-semibold mb-2">Popular Books</h2>
          <div className="p-4 mt-4 flex flex-wrap ">
            {
              popularBooks.map((bk)=>{
                return (<Card title={bk.title} subtitle={bk.subtitle} imgurl={bk.image} 
                  authors={bk.authors} id={bk.id} category={bk.category}></Card>)
              })
            }
      </div>
    </div>
  );
};

export default HomePage;
