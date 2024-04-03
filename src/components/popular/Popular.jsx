import React from 'react';
import data_product from '../assets/data'
import Items from '../items/Item';


function Popular(){
    return (
        <div className="m-5 p-4">
            <div className='flex flex-col text-2xl align-middle items-center  sm:text-4xl font-bold p-4 mx-2'>
                <h1>TENDÊNCIAS DA VEZ</h1>
                <hr className='bg-black text-black border-spacing-1 border-2 border-black w-[10rem]' />
            </div>
            <div className='grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:gap-5'>
                {data_product.map((item, i)=>{
                    return < Items 
                            
                                key={i} 
                                id={item.id} 
                                name={item.name} 
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular;