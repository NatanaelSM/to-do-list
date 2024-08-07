import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AllTasks } from "./pages/Tasks/AllTasks/AllTasks";
import { DaysTasks } from "./pages/Tasks/DaysTasks/DaysTasks";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<DefaultLayout />}>
                <Route path="all" element={<AllTasks />} />
                <Route path="days" element={<DaysTasks />} />
            </Route>
        </Routes>
    )
}