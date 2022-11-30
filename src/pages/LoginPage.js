export default function LoginPage(){

    const register = (e) => {
        e.preventDefault();
        window.location.href = "/register";
    }

    return (
        <div className="container mx-auto h-screen flex justify-center items-center">
            <form action=""  id="login" className="shadow-xl rounded-lg md:w-80 px-5">
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