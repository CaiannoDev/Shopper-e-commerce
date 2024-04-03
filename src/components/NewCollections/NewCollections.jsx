import React from 'react';
import new_collection from '../assets/new_collections'
import Item from '../items/Item'



function NewCollections(){
    return (
        <div className='w-screen h-auto mt-12'>
            <div className='flex flex-col text-2xl align-middle items-center  sm:text-4xl font-bold p-4 mx-2'>
                <h1>NEW COLLECTIONS</h1>
                <hr className='bg-black text-black border-spacing-1 border-2 border-black w-[10rem]' />
            </div>
            <div className='grid grid-cols-2 gap-3 p-5 sm:grid-cols-4 sm:gap-5'>
                {new_collection.map((item,i)=>{
                    return <Item 
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

export default NewCollections;