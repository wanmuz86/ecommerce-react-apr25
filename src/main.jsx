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
import banner1 from './assets/banner1.jpg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'
import { CartProvider } from './context/CartContext.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "categories/electronics",
        element: <ShopCategory title="Electronic" subtitle="Nice electronics items" banner={banner1} />
      },
      {
        path: "categories/men's clothing",
        element: <ShopCategory title="Men's clothing" subtitle="Selection for male" banner={banner2} />
      },
      {
        path: "categories/women's clothing",
        element: <ShopCategory title="Women's clothing" subtitle="Selection for women" banner={banner3} />
      },
      {
        path: "categories/jewelery",
        element: <ShopCategory title="Jewelery" subtitle="Gold, silver and others" banner={banner2} />
      },
      {
        path: "products/:id",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={routes}>
    </RouterProvider>
  </CartProvider>

  ,
)
