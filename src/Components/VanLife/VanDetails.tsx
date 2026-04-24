import { useParams, useLocation, Link } from "react-router-dom";
import type { VansProps } from "../../types/VanType";

export default function VanDetails({vans}: VansProps){
   const {id} = useParams();
   const state = useLocation().state as {vanName: string, from: string};

   const van = vans.find(van => van.id === Number(id));

    return(
        <div className="bg-[#FFF7ED] min-h-full flex-1 flex flex-col gap-5 px-10 py-5">
            <div className="flex justify-center gap-8">
                <img src={van?.imageUrl} alt={`An image of ${van?.name}`} 
                className="size-[40%]"
                />
                <div className="flex flex-col h-[40%] gap-2 py-3 text-lg text-black/80 font-semibold">
                    <p className="flex gap-2 items-center">
                    <span className="text-2xl text-black/70">{van?.name || state?.vanName}</span>
                    </p>

                    <p className="flex gap-2 items-center">
                    <span className="text-2xl text-black/70">{van?.type}</span>
                    </p>

                    <p className="flex gap-2 items-center">
                    <span className="text-2xl text-black/70">{van?.description}</span>
                    </p>

                    <p className="flex gap-2 items-center"><span>Price:</span>
                    <span className="text-2xl text-black/70">{van?.price}
                        <span className="text-gray-700">/day</span>
                    </span>
                    </p>
                </div>
            </div>

            <Link to=".."
            className="border border-gray-400 px-3 py-1 text-black/80 text-lg font-semibold w-max"
            >
                Go back
            </Link>
        </div>
    )
}