import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div
        className="min-h-full flex-1 bg-black/80 p-5 flex flex-col items-center justify-center"
        >
            <div className="w-[50%] text-white space-y-5 flex flex-col justify-center">
                <h2
                className="font-bold text-5xl"
                >You got travel plans, we got the travels vans</h2>

                <p className="w-[70%]">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

                <Link to="/vans"
                className="py-4 text-white text-2xl font-semibold bg-[#FF8C38] w-full cursor-pointer text-center"
                >Find Your Van</Link>
            </div>
        </div>
    )
}