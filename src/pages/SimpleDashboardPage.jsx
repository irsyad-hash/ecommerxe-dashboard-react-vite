import { Button } from "@nextui-org/react"
import { NavLink, Outlet } from "react-router-dom"

function SimpleDashboardPage() {
    const
  return (
    <div className="flex h-screen">
        <nav className="w-64 bg-gray-100 p-4">
            <h1 className="text-xl font-bold mb-4">Simple Dashboard
                <NavLink to={"/dashboard"} className={"block py-2"}>
                    Home
                </NavLink>
                <NavLink to={"/dashboard"} className={"block py-2"}>
                    Home
                </NavLink>
                <NavLink to={"/dashboard"} className={"block py-2"}>
                    Home
                </NavLink>
                <NavLink to={"/dashboard"} className={"block py-2"}>
                    Home
                </NavLink>
                <NavLink to={"/dashboard"} className={"block py-2"}>
                    Home
                </NavLink>
                <Button onClick={logoutHanler} color="danger" variant="bordered">
                    Logout
                </Button>
            </h1>
        </nav>
        <main className="flex-1 p-4">
            <Outlet />
        </main>
    </div>
  )
}

export default SimpleDashboardPage