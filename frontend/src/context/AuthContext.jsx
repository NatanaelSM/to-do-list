import { createContext, useEffect, useState } from "react";
import { loginService } from "../services/loginService";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const AuthProvider = ({ children }) => {

    const [isAutenticado, setIsAutenticado] = useState(null);
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {
            setIsAutenticado(true);
        } else {
            setIsAutenticado(false);
        }
        setLoading(false)
        
    }, []);

    const handleLogin = async (email, senha) => {
        try {
            const res = await loginService(email, senha);
            if (res.error) {
                return { error: true, msg: res.msg }
            } else {
                localStorage.setItem('token', res.data.token);
                setIsAutenticado(true);
                navigate('/tasks/days');
            }
        } catch (err) {
            return 'Erro inesperado. Tente novamente.'
        }
    };

    const handleLogout = () => {
        setIsAutenticado(false);
        localStorage.removeItem('token');
        navigate('/usuario/login');
    };

    if (isLoading) {
        return <h1>Loading...</h1>
    }


    return (
        <Context.Provider value={{ isAutenticado, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
};

export { Context, AuthProvider };
