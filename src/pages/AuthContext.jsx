import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const value = {
        todos,
        setTodos
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export  {AuthProvider,AuthContext}