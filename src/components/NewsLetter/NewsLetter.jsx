

function NewsLetter(){
    return (
        <div className='flex flex-col gap-3 bg-gradient-to-l from-purple-200 to-white w-96 md:w-[70rem] font-bold m-auto p-8 mt-12 mb-24'>
            <div className="m-auto">
                <h1 className="">Receba ofertas e novidades por e-mail</h1>
                <p className="text-md">Cadastre-se em nossa newsletter e fique atualizado.</p>
            </div>

            <div className='flex flex-col md:flex-row md:items-baseline md:gap-1 items-center m-auto'>
                <input className="text-center ring-1 ring-black rounded-full py-2 md:px-6 md:py-2" id="div-input" type="email" placeholder='digite seu email'/>
                <button className="text-white flex border align-middle justify-center w-[8rem] md:w-[12rem] border-solid rounded-full ring-1 bg-black ring-white p-4  sm:mt-[4rem] mt-[2rem]" id="div-btn">Cadastrar</button>
            </div>
        </div>
    )
}

export default NewsLetter;