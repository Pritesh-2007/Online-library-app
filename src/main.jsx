import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Error from './Error.jsx'
import Navbar from './Navbar';
import HomePage from './HomePage';
import BrowseBooks from './BrowseBooks';
import BookDetails from './BookDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddBook from './AddBook.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      { 
        index: true,
        element:<HomePage/>, 
      },
      {
        path:"/HomePage",
        element:<HomePage/>
      },
      {
        path:"/browse-books/:category",
        element:<BrowseBooks/>
      },
      {
        path:"/BookDetails/:id",
        element:<BookDetails></BookDetails>
      },
      {
        path:"/AddBook",
        element:<AddBook/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
