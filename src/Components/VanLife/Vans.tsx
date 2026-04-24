import { Link } from "react-router-dom";
import type {VansProps } from "../../types/VanType";
import Van from "./Van";

import { useSearchParams } from "react-router-dom";



export default function Vans({vans}: VansProps){
    const [searchParams, setSearchParams] = useSearchParams()
    const filterTerm = searchParams.get("filter") || ""

    const filtered = vans.filter(van => van.type.toLowerCase().includes(filterTerm.toLowerCase()))

    function handleFilter(e: React.MouseEvent<HTMLButtonElement>){
        const value = e.currentTarget.value;
        if(["simple", "luxury", "rugged"].includes(value)){
            setSearchParams({filter: value})
        }else{
            setSearchParams({})
        }
    }
    return (
        <div
        className="min-h-full flex flex-col items-center gap-5"
        >
            <h1
            className="text-3xl font-semibold"
            >Explore our Van options</h1>

            <div className="flex justify-between items-center gap-5">
                <button
                onClick={handleFilter}
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded"
                value="simple"
                >Simple</button>

                <button
                onClick={handleFilter}
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded"
                value="luxury"
                >Luxury</button>

                <button
                onClick={handleFilter}
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded"
                value="rugged"
                >Rugged</button>

                <button 
                onClick={handleFilter}
                value="clear"
                className="decoration-2 underline underline-offset-2 decoration-gray-700 text-gray-700 text-lg cursor-pointer"
                >Clear Filters</button>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-3 p-5">
                {filtered.map(van => (
                    <Link 
                    key={van.id} 
                    to={`${van.id}`}
                    state={{vanName: van.name, from: "/vans" }}
                    >
                        <Van van={van}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}