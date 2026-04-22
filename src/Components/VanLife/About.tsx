import { Link } from "react-router-dom"

export default function About(){
    return (
        <div
        className="min-h-full flex-1 px-20 flex flex-col justify-start items-center"
        >
            <div 
            className="p-10 space-y-4"
            >
                <h2 className="font-bold text-5xl">Don't Squeeze in a Sedan when you can relax in a van.</h2>
                <p className="text-black/80 text-xl">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>

                <p className="text-black/80 text-xl">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>

            <div className="bg-[#FFCC8D] px-10 py-5 flex flex-col items-center text-center w-[80%] gap-3 mb-10">
                <div>
                    <p className="font-semibold text-black text-xl">Your destination is waiting</p>
                    <p className="font-semibold text-black text-xl">Your van is ready</p>
                </div>

                <Link to="/vans"
                className="rounded-lg px-5 py-3 text-white text-2xl font-semibold bg-black w-[60%] cursor-pointer"
                >Explore our vans</Link>
            </div>
        </div>
    )
}