import { Outlet } from "react-router-dom";
import imgLayout from "../assets/imageLayout.svg";
import "./styles/usuarioLayoutStyle.css";

export const UsuarioLayout = () => {

    return (
        <div className="main-layout">
            <div className="left-layout">
                <div className="frase-layout">
                    <span>To <span style={{ color: 'rgb(255, 168, 167)', fontStyle: 'italic' }}>D</span>o<span style={{ color: 'rgb(255, 168, 167)', paddingInline: "0.1vw" }}>I</span>t</span>
                    <span>Organize sua vida!</span>
                </div>
                <img src={imgLayout} className='img-layout' alt='Imagem login' />
            </div>
            <div className="rigth-layout">
                <Outlet />
            </div>
        </div>
    );
};
