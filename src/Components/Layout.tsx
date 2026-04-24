import { Outlet } from "react-router-dom";
import Header from "./VanLife/Header";
import Footer from "./VanLife/Footer";

export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}