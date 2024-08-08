import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

export const DefaultLayout = () => {
    const { isAutenticado, handleLogout } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAutenticado === false) {
            navigate('/login');
        }

    });

    return (
        <>
            <h1>DefaultLayout</h1>
            <button onClick={handleLogout}>sair</button>
            <Outlet />
        </>
    );
};
