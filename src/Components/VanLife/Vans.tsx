import { useEffect, useState } from "react"
import Van from "./Van";
import { Link } from "react-router-dom";

export interface Van{
    id: number;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
    price: number
}

export default function Vans(){
    const [vans, setVans] = useState<Van[]>([]);

    useEffect(() => {
        const controller = new AbortController()
        async function fetchVans(){
            try{
                const response = await fetch("http://localhost:3000/api/vans", {
                    signal: controller.signal
                });

                if(!response.ok){
                    throw new Error(`An HTTP Error Occurred ${response.status} ${response.statusText}`)
                }
                setVans(await response.json())

            }catch(error){
                if(error instanceof Error && error.name === "AbortError"){
                    console.log("Fetch Aborted", error);
                }else{
                    console.log("A network error occurred", error);
                }
            }
        }

        fetchVans();

        return () => controller.abort()
    })
    return (
        <div
        className="min-h-full flex flex-col items-center gap-5"
        >
            <h1
            className="text-3xl font-semibold"
            >Explore our Van options</h1>

            <div className="flex justify-between items-center gap-2">
                <div
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded-lg"
                >Simple</div>

                <div
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded-lg"
                >Luxury</div>

                <div
                className=" px-2 py-1 bg-[#FFEAD0] text-[#4D4D4D] font-semibold cursor-pointer rounded-lg"
                >Rugged</div>
                <p></p>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-3 p-5">
                {vans.map(van => (
                    <Link to={`/vans/${van.id}`}>
                        <Van key={van.id} van={van}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}