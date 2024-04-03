import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png'

function CartItems(){ 

    const {all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);


    return (
        <div className="ml-2 mt-[6rem] w-[25rem] md:w-[40rem]">
            <div  className="justify-between grid grid-cols-3 md:w-[70rem] md:ml-[10rem] text-lg font-bold text-gray-600 md:text-xl md:items-center">
                <p>Produtos</p>
                <p id='titulo' className='hidden' >Titulo</p>
                <p id='preco' className='hidden'  >Preço</p>
                <p id='quantidade' className='hidden' >Quantidade</p>
                <p>Total</p>
                <p>Remover</p>
            </div>
            <hr className='bg-gray-300 md:w-[55rem] md:ml-[10rem] md:mb-4 md:mt-2  text-gray-300 border-spacing-1 border-2 border-gray-200 w-[25rem] md:m-auto'/>

            {all_product.map((e)=>{
                if(cartItems[e.id] > 0 ) {
                    return <div> 
                                 <div className=' justify-between grid grid-cols-3 md:w-[70rem] md:ml-[10rem] text-lg font-bold text-gray-600 md:text-xl md:items-center'>
                                        <img src={e.image} alt="" className='w-[6rem] md:w-[10rem]' />
                                        <p id='titulo1' className='hidden md:text-xs p-4 md:text-start' >{e.name} </p>
                                        <p id='preco1' className='hidden' >${e.new_price} </p>
                                        <button className='quantidade1 hidden' >{cartItems[e.id]}</button>
                                        <p className='text-red-600 font-bold'>${e.new_price*cartItems[e.id]}</p>
                                        <img className='w-[1rem] h-[1rem] cursor-pointer' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                 </div>
                                <hr className='bg-gray-300 md:w-[55rem] md:ml-[10rem] md:mt-4 text-gray-300 border-spacing-1 border-2 border-gray-200 w-[25rem] md:m-auto' />
                        </div>
                }

                return null;
            })}





            <div className="mt-[8rem] md:w-screen md:flex gap-[14rem] md:ml-10 md:mb-[8rem]">
                <div className="flex flex-col gap-3  w-[25rem]">
                    <h1 className='p-4 text-2xl font-bold text-gray-700'>Carrinho:</h1>
                    <div className='flex flex-col gap-3 text-lg font-semibold'>
                        <div className='flex justify-between'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between">
                            <p>Frete</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between'>
                           <h3>Total</h3>
                           <h3 className='text-red-600 font-bold'>${getTotalCartAmount()}</h3> 
                        </div>
                    </div>
                    <button className='text-white w-[10rem] border-solid rounded-lg ring-1 bg-red-500 ring-red-500 font-semibold mt-5 p-4'>PAGAMENTO</button>
                </div> 


                <div className="flex w-[25rem] mt-[6rem] flex-col gap-4 md:mt-7">
                        <p className='text-gray-600 font-bold md:text-lg'>Se possui Cupom de desconto, <br /> digite aqui:</p>
                        <div className="md:flex md:gap-1 md:flex-col">
                            <input className='border border-black rounded-full text-center bg-gray-100 py-2' type="text" placeholder='cupom' />
                            <button className='text-white font-semibold flex border align-middle justify-center w-[10rem] md:w-[14rem] border-solid rounded-lg  ring-1 bg-black ring-white mt-2 p-4'>Enviar</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems; 