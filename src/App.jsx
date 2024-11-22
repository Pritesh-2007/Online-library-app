
import books  from './utils/Books'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import bookcontext from './utils/BookContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/Store';
import './index.css'
function App() {
  
const bkdata=books;
const category=["fiction","non-fiction","Sci-fi"]

const [Category, setCategory] = useState('fiction');
  return (
    <>
    <div className="min-h-screen bg-gray-100">
    <Provider store={appStore}>    
    <bookcontext.Provider value={{category: Category,setCategory}}>
    <Navbar></Navbar>
    <div className="container mx-auto p-4">
    <Outlet></Outlet>
    </div>
    </bookcontext.Provider>
    </Provider>
    </div>
    </>
  )
}

export default App
