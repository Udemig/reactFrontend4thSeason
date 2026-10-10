import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'


const NewApp = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact/Memo">Contact</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact/:firstname' element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default NewApp