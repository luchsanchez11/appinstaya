export default function LoginPage(){

    const goToHome = (e) => {
        e.preventDefault();
        window.location.href = "/";
    }

    const register = (e) => {
        e.preventDefault();
        window.location.href = "/register";
    }

    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
            <form action=""  id="login" className="shadow-xl rounded-lg md:w-80 px-5">
                    <button onClick={goToHome} className="flex mb-7 text-burnt-sienna-700">
                        <span className="mr-2"><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#b9351c"><path d="M18.5 12H6m0 0l6-6m-6 6l6 6" stroke="#b9351c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> 
                        Home
                    </button>

                    <h1 className="text-3xl font-bold text-center mb-5 text-nile-blue-900">Hello Again!</h1>
                    <p className="text-center mb-5 text-nile-blue-600">Enter your email to get started</p>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="pb-1 text-nile-blue-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="pb-1 text-nile-blue-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>  
                    <div className="flex flex-col justify-center my-5 ">
                        <button type="submit" className="w-full bg-burnt-sienna-500 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Sign in</button>
                        <span className="w-full py-2 px-3 text-center">or</span>
                        <button onClick={register} className="w-full py-2 px-3 text-burnt-sienna-500 rounded-lg text-center">Register</button>
                    </div>
            </form>
        </div>
    )
}