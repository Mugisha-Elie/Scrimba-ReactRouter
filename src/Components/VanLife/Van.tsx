import type{ VanShape } from "../../types/VanType"

interface VanProp{
    van: VanShape
}

export default function Van({van}: VanProp){

    const colors: {[key: string]: string} = {
        "Simple": "bg-[#E17654] text-[#FFEAD0]",
        "Luxury": "bg-[#161616] text-[#FFEAD0]",
        "Rugged": "bg-[#115E59] text-[#FFEAD0]",
    }

    return (
        <div 
        className="p-3"
        >
            <div className="flex flex-col justify-center items-start w-max gap-2">
                <img src={van.imageUrl} alt={`${van.name} van image`} 
                className="w-fit"
                />
                <div
                className="flex items-center justify-between w-full"
                >
                    <h2 className="text-xl font-semibold">{van.name}</h2>
                    <p className="text-lg text-black/80 font-light"><span className="font-medium">{van.price}</span>/day</p>
                </div>
                <div
                className={`${colors[van.type]} px-2 py-1 rounded`}
                >
                    {van.type}
                </div>
            </div>
        </div>
    )
}