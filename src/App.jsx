import { useContext, useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import axios from 'axios'
import { primaryContext } from './context/PrimaryContext'
import { Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'

function App() {

  const { setProducts } = useContext(primaryContext)
  

  useEffect(() => {
    axios("https://fakestoreapi.com/products/").then((response) => {
      console.log(response);
      // response.data is the array of products
      setProducts(response.data);
    })

    console.log("im going here!");
  }, [])



  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      
      <Routes>
        <Route path="/"                element={<ProductList />} />
        <Route path="/cart"            element={<Cart />} />
        <Route path="/single_product"  element={<ProductDetails />} />
        <Route path="/single_product/:clickedId"  element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App