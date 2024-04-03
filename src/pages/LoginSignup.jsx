import { useState } from 'react';

function LoginSignup(){ 

    const [state, setState] = useState("Login"); 
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email: ""
    })


    const login = async ()=>{
        console.log("login fuction executada", formData);
        let responseData;
        await fetch('http://localhost:8080/login', {
            method:'post',
            headers:{
                Accept:'application/form-data',
                'content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData = data );

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }


    const signup = async ()=>{
        console.log("signup fuction executada", formData);
        let responseData;
        await fetch('http://localhost:8080/signup', {
            method:'post',
            headers:{
                Accept:'application/form-data',
                'content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData = data );

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }

    const changeHandler = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }



    return(
        <div className="w-screen">
            <div className="flex flex-col mt-8 p-6 md:text-xl md:m-auto md:gap-5 md:h-[40rem] md:w-[60rem] bg-gradient-to-b from-purple-200 to-white items-center">
                <h1 className='text-2xl'>{state}</h1>
                <div className="flex flex-col gap-6 m-4 p-2">
                {state==="Sign Up"? <input name='username' value={formData.username}  onChange={changeHandler} type="text" placeholder="Seu Nome" /> : <></>}
                    <input className='border rounded-full ring-1 ring-black p-2 text-center' name='email' value={formData.email}  onChange={changeHandler} type="email" placeholder="Seu Email"/>
                    <input className='border rounded-full ring-1 ring-black p-2 text-center' name='password' value={formData.password}  onChange={changeHandler} type="password" placeholder="Password" />
                    <button className='bg-red-500 text-white w-[12rem] border rounded-full p-4 ring-1 ring-red-500 m-auto mt-2' onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
                </div>
                {state==="Sign Up"? 
                    <p className="loginsignup-login"> Ja possui uma Conta? <span onClick={()=>{setState("Login")}} >Login here</span> </p> : 
                    <p> Criar uma Conta? <span className='hover:cursor-pointer hover:font-bold' onClick={()=>{setState("Sign Up")}} >Clique Aqui</span> </p>}
                <div className="flex gap-3 p-2">
                    <input className='hover:cursor-pointer' type="checkbox" name="" id=""/>
                    <p>Ao Continuar, Eu concordo com todos os Termos de Uso e Privacidade.</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;