import { HomeIcon } from "@heroicons/react/24/outline"
import { Button } from "@nextui-org/react"
import { NavLink, Outlet } from "react-router-dom"

const navigation = [
    { name: "Home", href: "/dashboard", icon: HomeIconIcon},
    { 
        name: "Users",
        href: "/dashbo"
    }
]
function DashboardPage() {
    const {logout, user} = useAuth

  return (
    <div className="flex h-screen">
        
    </div>
  )
}

export default DashboardPage