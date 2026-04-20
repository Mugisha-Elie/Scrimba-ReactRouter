import { Link } from "react-router-dom"

export default function Profile(){
    return(
        <div
        className="min-h-screen flex justify-center items-center gap-2 flex-colgit stat"
        >
            <h1 className="text-5xl font-semibold">The Profile Page</h1>
            <Link className="border border-gray-400 px-3 py-1" to="/">Back Home</Link>
        </div>
    )
}