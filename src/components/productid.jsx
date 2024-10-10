import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/authcontex'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from "../loding&error/loding"
import Error from "../loding&error/error"
import { useNavigate } from 'react-router-dom'

const Productid = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const {isLoding,setLoding,isError,setError} = useContext(AuthContext)
    const [update,setUpdate] = useState(false)
    const [data,setData] = useState({})
    const [formstate,setFormstate] = useState({
        name:"",
        price:"",
        description:"",
        quantity:""
    })
    let role = localStorage.getItem("role")
    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            setLoding(true)
            const response = await axios.get(`https://fullstackbackend-dbo0.onrender.com/product/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data.product)
            setLoding(false)
            setFormstate({
                name:response.data.product.name,
                price:response.data.product.price,
                description:response.data.product.description,
                quantity:response.data.product.quantity
            })
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }
    

    const updatedata = async () => {     
        try { 
            setLoding(true)
             await axios.patch(`https://fullstackbackend-dbo0.onrender.com/product/update/${id}`, {
                name:formstate.name,
                price:formstate.price,
                description:formstate.description,
                quantity:formstate.quantity
            },
                {
                    headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
            })
            setLoding(false)
            getdata()
            
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }

    const handlechange = (e) => {
       try {
         setFormstate({
             ...formstate,
             [e.target.name]: e.target.value
         })
       } catch (error) {
        console.log(error);
        
       }
    }

    const submitdata = (e) => {
        try {
            e.preventDefault()
            updatedata(formstate)
        } catch (error) {
            setError(true)
            console.log(error);
            
        }
    }

    const deleteproduct = async () => {
        try {
            setLoding(true)
            await axios.delete(`https://fullstackbackend-dbo0.onrender.com/product/delete/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setLoding(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }

    if(isLoding){
        return <Loading/>
    }

    if(isError){
        return <Error/>
    }
    console.log(data);
    
    return (
        <div style={{textAlign:"center"}}>
            <h1>Product Name: {data.name}</h1>
            <h1>Product Price: {data.price}</h1>
            <h1>Product Description: {data.description}</h1>
            <h1>Product Quantity: {data.quantity}</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
               {role=="admin" && <button onClick={() => setUpdate(!update)} >Edit</button>}
               {role=="admin" && <button onClick={deleteproduct}>Delete</button>}
            </div>
           {update && <div style={{textAlign:"center"}}>
                <h1>Update Product</h1>
                <br />
                <label htmlFor="">Name: </label>
                <input name='name' type="text" value={formstate.name} placeholder='name' onChange={handlechange} />
                <br />
                <label htmlFor="">Price: </label>
                <input name='price' type="number" value={formstate.price} placeholder='price' onChange={handlechange} />
                <br />
                <label htmlFor="">Description: </label>
                <input name='description' type="text" value={formstate.description} placeholder='description' onChange={handlechange}  />
                <br />
                <label htmlFor="">Quantity: </label>
                <input name='quantity' type="number" value={formstate.quantity} placeholder='quantity' onChange={handlechange}  />
                <br />
                <button onClick={submitdata}>Update</button>
            </div>}
        </div>

    )
}

export default Productid