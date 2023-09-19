import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import axios from 'axios'
import { primaryContext } from './context/PrimaryContext'

function App() {
 const {setProducts} = useContext(primaryContext);

  useEffect (() => {
    axios('https://fakestoreapi.com/products/').then((response) => {
    console.log(response)
    // response.data is the array of products
    setProducts(response.data)
    })

    console.log("im going here!")
  }, [])



  return (
    <div className='app'>
      <Navbar />
      <Sidebar/>
      <Dashboard />
      <Footer />
    </div>
  )
}

export default App
