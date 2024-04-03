import React from 'react';
import hand_icon from '../assets/hand_icon.png'
import hero_image from '../assets/hero_image.png'
import { Link } from 'react-router-dom';


function Hero(){
    return( 

        <div className="flex justify-around h-auto w-screen bg-gradient-to-b from-purple-100 to-white">


            <div className="font-bold p-9 md:mt-14"> 
                <div>

                    <div className='flex gap-3 items-center'>
                        <p className='text-4xl sm:text-5xl'>new</p>
                        <img className='w-[4rem]' src={hand_icon} alt="" />
                    </div>
                    <p className='text-4xl sm:text-5xl'>Collections</p>
                    <p className='text-4xl sm:text-5xl'>for Everyone</p> 
                    
                    <div className="text-white flex border align-middle justify-center w-[13rem] border-solid rounded-full ring-1 bg-red-500 ring-red-500 py-4 mt-8">

                            <Link to={'/womens'}>
                                <div>Ver Tudo em Feminino</div>
                            </Link>
                    </div> 
                </div> 

            </div>
            


            <div>
                <img id='logo-chato' className='w-[28rem] hidden' src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero;