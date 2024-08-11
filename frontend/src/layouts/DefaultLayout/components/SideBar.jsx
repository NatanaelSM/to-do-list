import "../styles/sideBarStyle.css"
import { FaCalendarWeek, FaSignOutAlt, FaRegListAlt } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { BtnRedirect } from "./BtnRedirect";
import { Context } from "../../../context/AuthContext";
import { useContext } from "react";

export const SideBar = () => {

    const { handleLogout } = useContext(Context)

    return (
        <div className="container-sidebar">
            <div className="container-menu">
                <div className="container-avatar">
                    <a className="btn-config">
                        <FaUserGear size='2.5rem' color="white"/>
                    </a>
                    <span>Natanael</span>
                </div>

                <div className="container-btns">
                    <BtnRedirect icone={<FaRegListAlt color="gray" />} textoRedirect="Todas tarefas" caminhoRedirect="/tasks/all" />
                    <BtnRedirect icone={<FaCalendarWeek color="gray" />} textoRedirect="Próximos 7 dias" caminhoRedirect="/tasks/days" />
                </div>
            </div>

            <button onClick={handleLogout} className="btn-sair">
                <span>Sair</span>
                <FaSignOutAlt color="white" />
            </button>

        </div>
    );
};
