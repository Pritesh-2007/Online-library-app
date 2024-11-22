 import React, { useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Card from './Card';
const BrowseBooks = () => {
  const {category}=useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const books1= useSelector((store)=>store.Book.items);
  const categoricalbook=books1.filter((bok)=>bok.category==category)
  const filteredBooks = categoricalbook.filter(book =>
    (book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    
  );

  return (
    <div className="p-4 bg-white shadow rounded flex flex-col flex-grow">
      <h1 className="text-3xl font-bold mb-4 text-center">Showing Books of {category} - Enjoy Reading!</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title or author"
        className=" self-center mt-4 px-4 py-2 w-full max-w-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="p-4 mt-4 flex flex-wrap">
        {filteredBooks.map((bk, index) => (
          <Card
            key={index}
            title={bk.title}
            subtitle={bk.subtitle}
            imgurl={bk.image}
            authors={bk.authors}
            id={bk.id}
            category={bk.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
