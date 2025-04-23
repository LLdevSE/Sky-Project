import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import ProductCard from './components/product-card.jsx'

function App() {

  return (

    <div className="bg-gray-100 min-h-screen">
      <Header />
      <ProductCard name="Product 1" description="Description 1" price="Price 1" />
      <ProductCard name="Product 2" description="Description 2" price="Price 2" />
      <ProductCard name="Product 3" description="Description 3" price="Price 3" />
    </div>

  )
}

export default App
