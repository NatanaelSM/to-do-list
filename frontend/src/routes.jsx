import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { CadastroUsuario } from "./pages/CadastroUsuario/CadastroUsuario";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { UsuarioLayout } from "./layouts/UsuarioLayout/UsuarioLayout";
import { AllTasks } from "./pages/Tasks/AllTasks/AllTasks";
import { DaysTasks } from "./pages/Tasks/DaysTasks/DaysTasks";
import { useContext } from "react";
import { Context } from "./context/AuthContext";

export const AppRoutes = () => {
    const { isAutenticado } = useContext(Context);

    return (
        <Routes>
            <Route path="/usuario" element={<UsuarioLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<CadastroUsuario />} />
            </Route>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="tasks/all" element={<AllTasks />} />
                <Route path="tasks/days" element={<DaysTasks />} />
            </Route>
        </Routes>
    )
};
