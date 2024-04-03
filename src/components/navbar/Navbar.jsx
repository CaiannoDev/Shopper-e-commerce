
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png' 
import { useContext, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../assets/nav_dropdown.png'





function Navbar(){
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }


   return (
    <div className='bg-white w-screen h-auto mb-3 sm:flex-col sm:justify-between md:flex-col shadow-inner shadow-slate-200'> 

        <div className='flex justify-between text-2xl font-bold w-screen items-center'>
            <div className='ml-4 flex flex-col items-center md:flex-row'>
                <img src={logo} alt="" />
                <p className='md:text-4xl'>SHOPPER</p>
            </div>

            <div className='flex gap-14 items-center'>
                {localStorage.getItem('auth-token')?
                    <button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> :
                    <Link to='/login' ><button className='text-xl md:text-2xl border border-solid rounded-full ring-1 shadow-lg ring-purple-300 px-6 py-2 hover:bg-purple-200 '>Login</button></Link> }
                
                <div className='flex-col relative mr-5'>
                    <div className='text-base float-end text-white bg-red-500/100 px-2 rounded-full'> {getTotalCartItems()} </div>
                    <Link to='/cart' ><img src={cart_icon} alt="" /></Link>
                </div>
            </div>
        </div> 

        <div> 


        <div> 
            <ul ref={menuRef} className='lg:absolute lg:ml-[29rem] lg:-mt-14 mt-7 flex gap-4 text-2xl justify-center'>
                <li className=' hover:text-purple-600' onClick={()=>{setMenu("shop")}}> <Link to='/'>Shop</Link> {menu==="shop"?<hr className='border border-purple-500' />:<></>}  </li>
                <li className=' hover:text-purple-600' onClick={()=>{setMenu("mens")}}> <Link to='/mens' >Masculino</Link> {menu==="mens"?<hr className='border border-purple-500' />:<></>}  </li>
                <li className=' hover:text-purple-600' onClick={()=>{setMenu("womens")}}> <Link to='/womens' >Feminino</Link>  {menu==="womens"?<hr className='border border-purple-500' />:<></>}  </li>
                <li className=' hover:text-purple-600' onClick={()=>{setMenu("kids")}}> <Link to='/kids'>Kids</Link> {menu==="kids"?<hr className='border border-purple-500' />:<></>}  </li>
            </ul>
        </div>


        </div>

        {/* <img  className='nav-dropdown' onClick={dropdown_toggle}  src={nav_dropdown} alt="" /> */} 

    </div>
   ) 
}

export default Navbar;