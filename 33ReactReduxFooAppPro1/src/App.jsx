import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import { useDispatch } from 'react-redux'
import { getRestaurants } from './redux/actions/restaurant-actions'
import { getCart } from './redux/actions/cart-actions'
import Restaurant from './pages/restaurant'
import Cart from './pages/cart'
import Home from "./pages/home";
import Footer from './components/footer'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getRestaurants())
    dispatch(getCart())
  },[])

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Header />

        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurant/:id' element={<Restaurant />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>

      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
