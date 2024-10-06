import axios from "axios"
import { useState } from "react"

const CreateProduct = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [model, setmodel] = useState("")
    const [price, setprice] = useState("")

    const isError = title === ""||description===""||model===""||price===""

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`http://localhost:3001/product/add`, { title, description, model, price })
            console.log(response)
            alert("Product Added")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="form">
                <h1 style={{textAlign:"center",margin:"10px"}}>Add Product</h1>
                <form action="" style={{border:"1px dotted red",padding:"10px",width:"30%",margin:"auto",textAlign:"center",borderRadius:"10px"}}>
                    <label >Title:</label>
                    <input type="text" placeholder="title" value={title} onChange={(e) => settitle(e.target.value)} />
                    <br />
                    <label >Description:</label>
                    <input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} />
                    <br />
                    <label >Model:</label>
                    <input type="text" placeholder="model" value={model} onChange={(e) => setmodel(e.target.value)} />
                    <br />
                    <label >Price:</label>
                    <input type="text" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                    <br />
                    <button onClick={() => { isError ? alert("Please fill all the fields") : handleSubmit() }} type="submit">Submit</button>  
                </form>
            </div>
        </>
    )
}

export default CreateProduct