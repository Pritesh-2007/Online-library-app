// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { addbook } from './utils/BookSlice';
// const AddBook = () => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [subtitle, setsubtitle] = useState('');
//   const [category,setCategory]=useState('');
//   const categoriesarray = ["fiction","non-fiction","Sci-fi"];
//   const booquant=useSelector((store)=>store.Book.items)
//   console.log(booquant.length);
//   const dispatch=useDispatch();
// let dummydata={
//     "id": "0230283128",
//         "title": "History and Cultural Memory in Neo-Victorian Fiction",
//         "subtitle": "Victorian Afterimages",
//         "authors": "Kate Mitchell",
//         "image": "https://www.dbooks.org/img/books/0230283128s.jpg",
//         "url": "https://www.dbooks.org/history-and-cultural-memory-in-neo-victorian-fiction-0230283128/",
//         "category": "fiction"
// }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Book added: ${title} by ${author}`);
//     const bkobj={title:title,subtitle:subtitle,author:author,category:category};
//     dispatch(addbook(bkobj)); 
//     setTitle('');
//     setAuthor('');
//     setsubtitle('');
//   };

//   return (
//     <div>
//       <h1>Add a New Book</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Book Title"
//         />
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder="Author"
//         />
//         <input type="text"
//           value={subtitle}
//           onChange={(e) => setsubtitle(e.target.value)}
//           placeholder="Subtitle"
//         />
//          <select className="dropdown" value={category} onChange={(e)=>setCategory(e.target.value)}> 
//         {
//             categoriesarray.map((category, index) => 
//          ( <option key={index} value={category}>{category}</option> ))
//           } 
//           </select>
//         <button type="submit">Add Book</button>
//       </form>
//       {
//         booquant.map((x)=>(<h1>{x.author}</h1>))
//       }
//     </div>
//   );
// };

// export default AddBook;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addbook } from './utils/BookSlice';
import { useSelector } from 'react-redux';
import bookCover from '../src/assets/image.png';
const AddBook = () => {
  const [title, setTitle] = useState('');
  const [authors, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(bookCover);

  const [subtitle, setsubtitle] = useState('');
  const [url,seturl]=useState('');

  const categoriesarray = ["fiction","non-fiction","Sci-fi"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books=useSelector((store)=>store.Book.items)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    function generateRandomId() 
    {
       return Math.floor(1000 + Math.random() * 9000);
    }
    let bid=generateRandomId();
    console.log(bid,"before")
    books.map((bkid)=>{
      if(bkid.id===bid)
        {
          bid=generateRandomId(); 
        } 
        return bid;
    })
   let id=bid.toString();
    console.log(bid,"after")

    if (!title || !authors  ||!subtitle ||!category) {
      alert('Please fill in all fields');
      return;
    }

   
   
    dispatch(addbook({id, title, subtitle, authors, category, image, url }));
    console.log("what is my image url:",image)
    navigate(`/BookDetails/${id}`);
  };

  return (

    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            value={authors}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Subtitle</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setsubtitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
        <select value={category} className="block w-full p-2 border rounded mb-4" required onChange={(e) => setCategory(e.target.value)}
        > 
        { 
            categoriesarray.map((category, index) => 
         ( <option key={index} value={category}>{category.toUpperCase()}</option> ))
          } 
          </select>
         </div>
         <div className="mb-4">
         <label className="block text-gray-700">Url of book</label>
         <input
            type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
