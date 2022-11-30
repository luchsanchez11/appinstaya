import React from "react";

function CreateOrder() {
    return (
        <div id= "createOrder" className="mx-5 lg:w-1/2 lg:mx-auto my-10 shadow-md sm:rounded-lg py-3">
            <h1 className="text-4xl font-bold text-center my-8 text-nile-blue-900">Create Order</h1>
            <div className="mx-10">
                <form action="">
                    <h2 className="text-2xl font-semibold mt-8 mb-5 text-nile-blue-700" >Pick up details</h2>
                    <div className="md:flex md:justify-around">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpSender">Sender</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpSender" id="pickUpSender" placeholder="Arthur Lavin"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpID">ID</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="pickUpID" id="pickUpID" placeholder="1234567890"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpAddress">Address</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpAddress" id="pickUpAddress" placeholder="Kra 30-56 #76"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpCity">City</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpCity" id="pickUpCity" placeholder="Camberra"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpDate">Pick up Date</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="date" name="pickUpDate" id="pickUpDate" placeholder=""/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpFrom">Time slot available for pick up from</label>
                            <input className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="time" name="pickUpFrom" id="pickUpFrom" placeholder=""/>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpTo">To</label>
                            <input className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="time" name="pickUpTo" id="pickUpTo" placeholder=""/>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold mt-8 mb-5 text-nile-blue-700">Package details</h2>
                    <h2 className="text-1.5xl font-semibold mt-8 mb-5 text-nile-blue-600" >Dimensions (cms round up), Weight (kg)</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageLength">Length</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="" id="" placeholder="100"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageWidth">Width</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="packageWidth" id="packageWidth" placeholder="80"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageHeight">Height</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="packageHeight" id="packageHeight" placeholder="120"/>
                        </div>
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageWeight">Weight</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="packageWeight" id="packageWeight" placeholder="10"/>
                        </div>
                        <div>
                            <p className="pb-1 text-nile-blue-600">Delicate items?</p>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageYes">Yes</label> 
                            <input className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="checkbox" name="packageYes" id="packageYes"/>
                            <label className="pb-1 text-nile-blue-600" htmlFor="packageNo">No</label> 
                            <input className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="checkbox" name="packageNo" id="packageNo"/>
                        </div>                      

                    </div>
                    <h2 className="text-2xl font-semibold mt-8 mb-5 text-nile-blue-700" >Recipent details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center">
                        <div>
                            <label className="pb-1 text-nile-blue-600" htmlFor="pickUpRecipentName">Name</label>
                            <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpRecipentName" id="pickUpRecipentName" placeholder="Savannah McArthur"/>
                        </div>
                        <div>
                             <label className="pb-1 text-nile-blue-600" htmlFor="pickUpRecipentID">ID</label>
                             <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="number" name="pickUpRecipentID" id="pickUpRecipentID" placeholder="1234567890"/>
                        </div>
                        <div>
                              <label className="pb-1 text-nile-blue-600" htmlFor="pickUpRecipentAddress">Address</label>
                              <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpRecipentAddress" id="pickUpRecipentAddress" placeholder="Kra 70-56 #76"/>
                        </div>
                        <div>
                               <label className="pb-1 text-nile-blue-600" htmlFor="pickUpRecipentCity">City</label>
                              <input  className="bg-nile-blue-50 border border-nile-blue-500 text-sm rounded-lg focus:ring-nile-blue-500 focus:border-nile-blue-700 block w-full p-2.5" type="text" name="pickUpRecipentCity" id="pickUpRecipentCity" placeholder="Otawa"/>
                        </div>
                    </div>                    
                    <div className="flex justify-center mt-8 mb-5">
                        <button type="submit"  className="bg-burnt-sienna-500 text-[white] font-medium py-2 px-4 mx-2 rounded-lg">Save</button>
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default CreateOrder
