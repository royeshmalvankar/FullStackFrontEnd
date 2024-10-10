import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/authcontex'
import axios from 'axios'
import Loading from "../loding&error/loding"
import Error from "../loding&error/error"
import { Link } from 'react-router-dom'
const Products = () => {

    const {isLoding,setLoding,isError,setError} = useContext(AuthContext)
    const [data,setData] = useState([])

    useEffect(() => {
        getdata()
    },[])

    if (isLoding) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }

    const getdata = async () => {
        try {
            setLoding(true)
            const response = await axios.get("https://fullstackbackend-dbo0.onrender.com/product", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data.products)
            setLoding(false)
        } catch (error) {
            console.log('product page',error);
            setError(true)
            setLoding(false)
        }
    }

    return (
        <>
        <div className='products'>
            {data.map((item) => {
                return (
                    <Link key={item._id} to={`/products/${item._id}`} style={{ textDecoration: "none", color: "black" }}><div  className='product'>
                        <h1>Product Name: {item.name}</h1>
                        <h1>Description: {item.description}</h1>
                    </div></Link>
                )
            })}
        </div>
        </>
    )
}

export default Products