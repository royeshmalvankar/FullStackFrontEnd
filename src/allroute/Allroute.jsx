import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from '../components/Home'
import Login from '../components/login'
import Register from '../components/signup'
import Products from '../components/products'
import UD_products from '../components/UD_product'
import CreateProduct from '../components/createproduct'
// import Privateroute from '../components/Privateroute'

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
                <Route path="/ud_products/:id" element={<UD_products />} />
                <Route path="/createproduct" element={<CreateProduct />} />
                <Route path="*" element={<Home />} />
                {/* <Route path="/privateroute" element={<Privateroute />} />    */}
            </Routes>
        </>
    )
}

export default Allroute