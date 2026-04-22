import { NavLink, Link } from "react-router-dom"

export default function Header(){
    return(
        <header
        className="bg-[#FFF7ED] px-8 py-5 flex justify-between items-center"
        >
            <Link to="/" className="text-5xl font-bold tracking-tighter">#VANLIFE</Link>

            <nav
            className="flex gap-3"
            >
                <NavLink 
                to="/about"
                className={({isActive}) => (
                    isActive ? 'decoration-2 underline underline-offset-3 font-semibold' : 'decoratin-0'
                )}>About</NavLink>

                <NavLink 
                to="/vans"
                className={({isActive}) => (
                    isActive ? 'decoration-2 underline underline-offset-3 font-semibold' : 'decoratin-0'
                )}>Vans</NavLink>
            </nav>
        </header>
    )
}