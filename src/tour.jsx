import React from "react";
import { useState } from "react";
import "./index.css"

export default function Tours ({id, img, info, price, removeTour}) {
    const [openMore, setOpenMore] = useState(true)

    // console.log(id)

    return (
        <div className="w-full md:w-[40%] mx-auto rounded-sm">
            <img src={img} alt="" className="w-full object-cover rounded-t-sm" />
            <section className="flex flex-col p-4 space-y-4 bg-white">
                <article className="flex justify-between items-center md:tracking-wider text-sm md:text-lg">
                    <h3 className="font-bold ">Best of Paris in 7 Days tour</h3>
                    <h3 className=" bg-sky-200 px-2 py-[1px] tracking-widest rounded-lg text-sky-600 font-bold">${price}</h3>
                    
                </article>
                <div>
                    <p className="tracking-tight leading-4 text-sm md:text-lg">
                    {!openMore ? info : `${info.substring(0, 150)}. . .`}</p>
                <button 
                    onClick= {() => setOpenMore(prev => !prev)}
                    className="text-sky-400">{openMore ? "See More" : "See Less"}
                </button>
                </div>
                

                <button 
                    id={id}
                    onClick={removeTour}
                    className="border-2 border-red-400 py-1 inline-block px-2 text-red-500 font-bold mx-auto tracking-wider rounded-sm hover:bg-red-600 hover:text-white">Not interested</button>
            </section>
        </div>
    )
}