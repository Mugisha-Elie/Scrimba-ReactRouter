import { Routes } from "react-router-dom"
import { Outlet } from "react-router-dom"

export default function VanPage(){
    return(
        <div className="flex-1 bg-[#FFF7ED]">
            <Outlet />
        </div>
    )
}