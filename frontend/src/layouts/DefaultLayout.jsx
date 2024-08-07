import { Outlet } from "react-router-dom"

export const DefaultLayout = () => {

    return (
        <>
            <h1>DefaultLayout</h1>
            <Outlet />
        </>
    )
}