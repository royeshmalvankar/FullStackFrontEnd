import { useState, createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [data, setData] = useState([])
    const [isLoding, setLoding] = useState(false)
    const [isError, setError] = useState(false)
    const [email, setemail] = useState([]);
    const [password, setpassword] = useState([]);
    const [logemail, setlogemail] = useState([]);
    const [logpassword, setlogpassword] = useState([]);

    return (
        <AuthContext.Provider value={{ data, setData, isLoding, setLoding, isError,
         setError, email, setemail, password, setpassword,logemail, setlogemail,logpassword, setlogpassword}}>
            {children}
        </AuthContext.Provider>
    )

}