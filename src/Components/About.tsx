import { Link } from "react-router-dom"

export default function About(){
    return(
        <div
        className="min-h-screen flex justify-center items-center gap-2 flex-col"
        >
            <h1 className="text-5xl font-semibold">The About Page</h1>
            <Link className="border border-gray-400 px-3 py-1" to="/profile">Profile</Link>
        </div>
    )
}