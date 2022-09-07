import React from 'react'
import {Link,NavLink,useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate=useNavigate()
    
     const onLogout=(e)=>{
        e.preventDefault()
        navigate("/login",{
            replace:true
           
        })
     }
  return (
    <nav className='w-full h-auto flex justify-evenly bg-black'>
        <div id='nav-heroes-container' className='w-1/2 h-auto'>
            <ul className='nav-heroes-container__ul flex  p-2  '>
                <Link to={"/"}>
                    <div className='w-14 h-14 rounded-full bg-[url("../../../src/assets/marvedc.jpg")] bg-center bg-no-repeat bg-contain border-solid border-2 border-white opacity-40 hover:opacity-100' />
                </Link>

               <NavLink to="/marvel" className={({isActive})=>`w-auto h-12 mx-2 px-1 py-2 border-solid rounded-md bg-gray-700 border-2 text-white hover:bg-yellow-300 hover:text-black ${isActive? "bg-yellow-500 text-black":""}`}>Marvel</NavLink> 

               <NavLink to="/dc" className={({isActive})=>`w-auto h-12 px-1 py-2 border-solid rounded-md bg-gray-700 border-2 text-white hover:bg-yellow-300 hover:text-black ${isActive?"bg-yellow-500 ":""}`}>DC</NavLink> 
            </ul>
        </div>
        <div className='nav-logout-container w1/2 h-auto p-2 justify-end py-4'>
        <NavLink to="/inicio" className='w-auto h-12 mx-2 p-1 border-solid rounded-md bg-gray-700 border-2 text-white hover:bg-yellow-300 hover:text-black'>Inicio</NavLink> 

            <button className='logout-button p-1 border-solid rounded-md border-gray-700 border-2 bg-red-600 text-white hover:scale-75 duration-200 ease-in'
            onClick={onLogout}
            >Salir 👈</button>
        </div>
    </nav>
  )
}

export  {Navbar}