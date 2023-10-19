import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import DashBoardLayout from './components/DashBoardLayout/DashBoardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path:'/dashboard',
        element: <DashBoardLayout></DashBoardLayout> 
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
