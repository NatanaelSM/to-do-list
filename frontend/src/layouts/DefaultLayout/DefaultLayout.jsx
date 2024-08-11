import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";
import { SideBar  } from "./components/SideBar";
import "./styles/defaultLayout.css"

export const DefaultLayout = () => {
    const { isAutenticado, handleLogout } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAutenticado === false) {
            navigate('/usuario/login');
        }else if (window.location.pathname === "/") {
            navigate('/tasks/all');
        }

    }, [isAutenticado]);

    return (
        <div className="container-layout">
            <SideBar/>
            <Outlet />
        </div>
    );
};
