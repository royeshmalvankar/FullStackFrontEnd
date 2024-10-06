import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../authcontext/authcontex'
import axios from 'axios'
import Loading from "../loding&error/loding"
import Error from "../loding&error/error"
const products = () => {

    const {data,setData,isLoding,setLoding,isError,setError} = useContext(AuthContext)

    // useEffect(() => {
    //     getdata()
    // }, [])

    if (isLoding) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }

    const getdata = async () => {
        try {
            setLoding(true)
            const response = await axios.get("http://localhost:3001/product", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data.products)
            setLoding(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
        <div className='products'>
            {data.map((item) => {
                return (
                    <div key={item._id} className='product'>
                        <h1>Product Name: {item.name}</h1>
                        <h1>Description: {item.description}</h1>
                        <h1>Price {item.price}</h1>
                        <h1>Quantity: {item.quantity}</h1>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default products