import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const desc=`This book titled "${props.title}" falls under the category of ${props.category}. If you love reading ${props.category}, you will definitely enjoy it. To know more about the book, click "View Details".`

  return (
    <div className=" mt-7 p-4 max-w-min mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-80 transform transition duration-500 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <img
          className="w-64 h-80 object-cover rounded"
          src={props.imgurl}
          alt={props.title}
        />
        <div className="mt-4 text-center">
          <h4 className="text-xl font-semibold text-gray-900">{props.title}</h4>
          <h5 className="text-lg font-semibold text-slate-600">{props.authors && `Author:${props.authors}`}</h5>
          <p className="mt-2 text-gray-600">    
        {
         desc.length>100 ? desc.slice(0,100)+" Click below for details..."  :desc
            
         }
          </p>
          {props.url && <a href={props.url} className="self-end mt-4 inline-block bg-yellow-500 text-black py-2 px-4 rounded transition duration-300 hover:bg-blue-60">Click to visit Site</a>  }
          <Link
            to={`/BookDetails/${props.id}` }
            className="self-end mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
