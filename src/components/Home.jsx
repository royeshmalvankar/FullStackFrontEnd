import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let token=localStorage.getItem("token")
    return (
        <>
        <div className="home">
            <h1>Products</h1>
            <br />
            <Link to="/products"><button >Products</button></Link>
            <br />
            <br />
            <h1>Create Product</h1>
            <br />
            <Link  to="/createproduct"><button >Create Product</button></Link>
            <br />
            <br />
            {token?null:<><h1>Signup</h1>
            <br />
            <Link to="/signup"><button>Signup</button></Link>
            <br />
            <br />
            <h1>Login</h1>
            <br />
            <Link to="/login"><button>Login</button></Link>
            </>}
        </div>
        </>
    )
}

export default Home