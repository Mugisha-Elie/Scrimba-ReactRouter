import { useParams } from "react-router-dom";

export default function BlogPost(){
    const params = useParams();
    console.log(params);

    return(
        <div className="min-h-full flex justify-center items-center text-5xl font-semibold">
            <h1>Reading Post: {params.slug}</h1>
        </div>
    )
}