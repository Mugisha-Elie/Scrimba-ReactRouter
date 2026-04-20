import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div
        className="min-h-screen flex justify-center items-center gap-2 flex-col"
        >
            <h1 className="text-5xl font-semibold">(404) Page Not Found</h1>
            <Link className="border border-gray-400 px-3 py-1" to="/">Home 🏠</Link>
        </div>
    )
}