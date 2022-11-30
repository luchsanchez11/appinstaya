export default function RegisterPage(){

   
    const login = (e) => {
        e.preventDefault();
        window.location.href = "/login";
    }



    return(
        <div  className="container mx-auto h-screen flex justify-center items-center">
            <form action="" id="register" className=" shadow-xl rounded-lg md:w-80 px-5">
                    <h1 className="text-3xl font-bold text-center mb-5 text-nile-blue-900">Create a new account</h1>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="pb-1 text-nile-blue-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Jhon Smith" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="pb-1 text-nile-blue-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="pb-1 text-nile-blue-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="***********" className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5"/>
                    </div>
                    <div className="flex flex-col justify-center my-5 ">
                        <button type="submit" className="w-full bg-burnt-sienna-500 hover:bg-burnt-sienna-500 py-2 px-3 text-nile-blue-50 rounded-lg text-center">Register</button>
                        <span className="w-full py-2 px-3 text-center">or</span>
                        <button onClick={login} className="w-full py-2 px-3 text-burnt-sienna-500 rounded-lg text-center">Sign in</button>
                    </div>
            </form>
        </div>
    )
}