import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import bookcontext from './utils/BookContext';
function Navbar() {
  let {category}=useContext(bookcontext);
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Biography'];
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to={`/browse-books/${category}`} className="hover:underline">Browse {category} Books</Link></li>    
        <li><Link to="/AddBook" className="hover:underline">Add Book</Link></li>
      </ul>
     
    </nav>
  );
};

export default Navbar;
