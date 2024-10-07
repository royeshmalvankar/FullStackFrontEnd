import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from '../components/Home'
import Login from '../components/login'
import Register from '../components/signup'
import Products from '../components/products'
import CreateProduct from '../components/createproduct'
import Productid from '../components/productid'
import PrivateRoute from '../privateroute/privateroute'


const Allroute = () => {

    return (
        <>
            <Navbar />
            <div className='spacer'></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Productid />} />
                <Route path="/createproduct" element={<PrivateRoute><CreateProduct /></PrivateRoute>} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}

export default Allroute