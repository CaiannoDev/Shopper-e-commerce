import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';





function ProductDisplay(props){

    const {product} = props;
    const {addToCart} = useContext(ShopContext);



    return (
        <div className="w-screen h-auto mt-10 md:flex md:gap-9 md:items-start">
            <div className='flex items-center md:gap-2'>

                <div className="ml-2">
                    <img className='md:ml-5 h-[20rem] w-[18rem] md:h-[29rem] md:w-[27rem]' src={product.image} alt="" />
                </div>

                <div className="flex flex-col gap-3 md:gap-5 p-2">
                    <img className='h-[4.5rem] md:h-[6.2rem]'  src={product.image} alt="" />
                    <img className='h-[4.5rem] md:h-[6.2rem]'  src={product.image} alt="" />
                    <img className='h-[4.5rem] md:h-[6.2rem]'  src={product.image} alt="" />
                    <img  className='h-[4.5rem] md:h-[6.2rem]' src={product.image} alt="" />
                </div>
            </div>

            <div className='flex flex-col gap-4 ml-2 mt-3 md:mt-0 md:w-[40rem] md:h-[28rem]'>
                <h1 className='text-lg mt-4 font-bold md:mt-0'>{product.name}</h1>
                <div className='flex gap-2'>
                    <img className='w-6 h-6'  src={star_icon} alt="" />
                    <img  className='w-6 h-6' src={star_icon} alt="" />
                    <img className='w-6 h-6'  src={star_icon} alt="" />
                    <img  className='w-6 h-6' src={star_icon} alt="" />
                    <img  className='w-6 h-6' src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='flex gap-4 text-xl mt-3'>
                    <div className="line-through text-gray-700">${product.old_price}</div>
                    <div className="text-red-600 font-bold">${product.new_price}</div>
                </div>
                <div className="m-auto text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae accusantium mollitia sapiente, laudantium error.
                </div>
                <div className="flex flex-col gap-4 text-xl font-bold mt-8 md:mt-2">
                    <h1>Tamanho:</h1>
                    <div className='flex gap-3 text-lg'>
                        <div  className='cursor-pointer bg-gray-100 border ring-1 ring-gray-200 w-10 text-center' >P</div>
                        <div className='border bg-gray-100 cursor-pointer ring-1 ring-gray-200 w-10 text-center' >M</div>
                        <div className='border bg-gray-100 cursor-pointer ring-1 ring-gray-200 w-10 text-center' >G</div>
                        <div className='border bg-gray-100 cursor-pointer ring-1 ring-gray-200 w-10 text-center' >GG</div>
                        <div className='border bg-gray-100 cursor-pointer ring-1 ring-gray-200 w-10 text-center' >XG</div>
                    </div>
                </div>
                <div><button className=' mt-8 bg-red-500 text-white w-[12rem] border rounded-full p-4 ring-1 ring-red-500 m-auto' onClick={()=>{addToCart(product.id)}} >COMPRAR</button></div>
                <div className='mt-8 text-md'>
                    <p className='productdisplay-right-category'> <span className='font-bold'>Categoria:</span> Women, T-shirt, Crop Top </p>
                    <p className='productdisplay-right-category'> <span className='font-bold' >Tags:</span> Modern, Latest </p>
                </div>
            </div>

        </div>
    )
}


export default ProductDisplay;