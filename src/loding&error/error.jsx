const Error = () => {
    return(
        <div>
            <h1 style={{color:"red"}}>Something went wrong, {console.error('error')}</h1>
            <p style={{color:"red"}}>Please try again later</p>
        </div>
    )
}

export default Error