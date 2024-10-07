import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateProduct = () => {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [quantity, setquantity] = useState("")
    const [price, setprice] = useState("")

    const navigate = useNavigate()

    const isError = name === ""||description===""||quantity===""||price===""

    const handleSubmit = async (e) => {

        if(isError) return alert("Please fill all the fields")
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/product/add`, { name: name, description: description, quantity: quantity, price: price }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            alert("Product Added")
            navigate("/products")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="form">
                <h1 style={{textAlign:"center",margin:"10px"}}>Add Product</h1>
                <form action="" style={{border:"1px dotted red",padding:"10px",width:"30%",margin:"auto",textAlign:"center",borderRadius:"10px"}}>
                    <label >Name:</label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
                    <br />
                    <label >Description:</label>
                    <input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} />
                    <br />
                    <label >Price:</label>
                    <input type="number" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                    <br />
                    <label >Quantity:</label>
                    <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                    <br />
                    <button onClick={ handleSubmit} type="submit">Submit</button>  
                </form>
            </div>
        </>
    )
}

export default CreateProduct