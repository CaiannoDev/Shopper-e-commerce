
import React from 'react';
import exclusive_image from '../assets/exclusive_image.png'



function Offers(){
    return(
        <div className="w-screen items-center justify-between flex font-bold m-auto p-4 bg-gradient-to-b from-purple-100 to-white">
            <div className="md:pl-[14rem]">
            
                <h1 id='msg-chata' className='hidden sm:visible text-sm sm:text-2xl flex-2'>Ofertas para Você</h1>
                <p className='md:text-4xl'>DESCUBRA O SEU ESTILO</p>
                <p className='md:text-4xl'>DE SER LIVRE.</p>
                <button className='text-white flex border align-middle justify-center w-[8rem] md:w-[13rem] border-solid rounded-full ring-1 bg-red-500 ring-red-500 p-4  sm:mt-[4rem] mt-[7rem]'>Check Now</button>
            </div> 

            <div className="">
                <img className='' src={exclusive_image} alt="" />
            </div>

        </div>
    )
}

export default Offers;