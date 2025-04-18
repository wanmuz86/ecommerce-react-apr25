import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import ShopCategory from './pages/shop-category/ShopCategory.jsx'
import Product from './pages/product/Product.jsx'
import Cart from './pages/cart/Cart.jsx'
import { RouterProvider } from 'react-router'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"categories/electronics",
        element:<ShopCategory/>
      },
      {
        path:"categories/men's clothing",
        element:<ShopCategory/>
      },
      {
        path:"categories/women's clothing",
        element:<ShopCategory/>
      },
      {
        path:"categories/jewelery",
        element:<ShopCategory/>
      },
      {
        path:"products/:id",
        element:<Product/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={routes}>
  </RouterProvider>
    
  ,
)
