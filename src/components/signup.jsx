import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { AuthContext } from "../authcontext/authcontex";
const Register = () => {
    const {email, setemail,password,setpassword} =useContext(AuthContext)
    const [name, setname] = useState("");
    const [role, setrole] = useState("");
    const navigate = useNavigate()

    const reset = () => {
        setname("");
        setemail("");
        setpassword("");
        setrole("");
    }
    async function handleSubmit(e){

        e.preventDefault();
        try {
            let response =  await axios.post(`http://localhost:3001/user/register`,{name,email,password,role})
            console.log("rp",response)
            alert("Registered Successfully")
            reset()
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div className="details" style={{marginTop:"200px"}}>
            <h1 style={{textAlign:"center",margin:"10px"}}>Register</h1>
                <div className="form">
                    <label htmlFor="">Name</label>
                    <br />
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <br />
                    <label htmlFor="">Role</label>
                    <br />
                    <select value={role} onChange={(e)=>setrole(e.target.value)}>
                        <option value="">Select</option>
                        <option value="admin">Admin</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    <br />
                    <button onClick={handleSubmit}>Register</button>
                </div>
        </div>
        <div className="register">
                <p>Already have an account?</p>
                <button onClick={()=>navigate("/login")}>Login</button>
            </div>
        </>
    );
}

export default Register