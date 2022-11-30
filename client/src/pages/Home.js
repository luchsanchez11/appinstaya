import React from "react";

import image1 from "../img/entrega-paquete.jpg";
import Logo from '../img/Logo_InstaYa.png';


function Home() {

    const register = (e) => {
        e.preventDefault();
        window.location.href = "/register";
    }

    const login = (e) => {
        e.preventDefault();
        window.location.href = "/login";
    }

    return (
        <section className="flex lg:grid sm:grid-cols-3 h-screen place-items-center place-content-center">

            <div className="mx-5 md:mx-10 col-span-3 sm:col-span-1 w-full sm:w-9/12">
                <img src={Logo} alt="Logo InstaYa" className="h-36 mx-auto"/>

                <div className="flex justify-around items-center mb-10">
                    <button onClick={register} className="bg-burnt-sienna-500 text-[white] font-medium py-2 px-4 mx-2 rounded-lg">Register</button>
                    <button onClick={login} className="bg-burnt-sienna-400 text-burnt-sienna-700 font-medium py-2 px-4 mx-2 rounded-lg">Sign in</button>
                </div>
                
            </div>
            
            <div className="hidden lg:block sm:col-span-2 mx-10">
                <img src={image1} alt="Entrega de paquete" className="rounded-lg shadow-xl" />
            </div>
        </section>
    )
}

export default Home;