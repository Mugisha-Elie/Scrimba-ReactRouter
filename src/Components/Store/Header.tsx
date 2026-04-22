import { NavLink, Link } from "react-router-dom"

export default function Header(){
    return(
        <header
        className="p-3 bg-black/20 border border-gray-400 flex justify-between items-center"
        >
            <h2 className="text-3xl text-black/80 font-bold">React<span className="text-red-400">Router</span></h2>
            <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer"
            >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/profile">Profile</Link>
            </div>

            <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer"
            >
                <NavLink 
                to="/"
                className={({isActive}) => {
                    return isActive ? 'decoration-3 underline underline-offset-4' : 'decoration-0'
                }}
                >NavHome</NavLink>


                <NavLink to="/about">NavAbout</NavLink>
                <NavLink to="/profile">NavProfile</NavLink>
            </div>
        </header>
    )
}