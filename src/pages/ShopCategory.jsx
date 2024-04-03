import Item from "../components/items/Item";
import { ShopContext } from "../context/ShopContext";
import React from "react";
import { useContext } from "react";
import dropdown_icon from '../components/assets/dropdown_icon.png'




function ShopCategory({category,banner}){ 
    
    const {all_product} = useContext(ShopContext);

    return(
        <div className="w-screen">
            <img className="shopcategory-banner" src={banner} alt="" />
            <div className='flex justify-between m-4 mt-7 text-base md:text-lg'>
                <p>
                   <span>Mostrar 1-12</span> dos 36 products
                </p>
                <div className="flex border border-black rounded-full w-[9rem] p-2 md:text-lg gap-2">
                    <p className="text-sm">ordenado por </p>
                    <img className="w-5 h-3" src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className=" grid grid-cols-2 gap-4 p-4 md:grid md:grid-cols-4">
                {all_product.map((item,i)=>{
                    if(item.category===category) {
                        return <Item  
                                    key={i} 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price} /> 
                    }else {return null;}
                })}
            </div>
            <div className="flex justify-center m-14">
                <button className="w-[13rem] border rounded-full p-4 ring-1 ring-black bg-gray-100 text-black" >Explore mais</button>
            </div>
        </div>
    )
}

export default ShopCategory;