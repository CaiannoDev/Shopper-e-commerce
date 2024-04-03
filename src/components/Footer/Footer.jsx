import React from 'react';
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

function Footer(){
    return (
        <div className="bg-white w-screen h-auto mt-3 flex-col justify-between shadow-inner shadow-slate-200 sm:text-xl">
            <div className="flex flex-col items-center">
                <img className='w-24' src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='flex gap-5 p-4 justify-center m-1'>
                <li>Empresa</li>
                <li>Produtos</li>
                <li>Offices</li>
                <li>Sobre</li>
                <li>Contatos</li>
            </ul>
            <div className='flex gap-5 justify-center m-2'>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center m-2 p-4">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;