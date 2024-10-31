import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
const router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />
      },
      {
        path: '/home',
        loader: () => fetch('https://api.escuelajs.co/api/v1/products'),
        element: <Home></Home>,

      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/product/:productId'

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
