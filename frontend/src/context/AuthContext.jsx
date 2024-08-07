import { createContext, useState } from "react"
import { loginService } from "../services/loginService";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const AuthProvider = ({ children }) => {

    const [isAutenticado, setIsAutenticado] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async (email, senha) => {

        try {
            const res = await loginService(email, senha);
            localStorage.setItem('token', res.data.token);
            setIsAutenticado(true);
            navigate('/tasks');
        } catch (err) {
            console.log(err);
        }
    }

    const handleLogout = () => {

        setIsAutenticado(false);
        localStorage.removeItem('token');
        navigate('/login');

    }

    return (
        <Context.Provider value={{ isAutenticado, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )

}

export { Context, AuthProvider }