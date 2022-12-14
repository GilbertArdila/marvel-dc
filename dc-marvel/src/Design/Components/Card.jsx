import React,{Suspense, lazy} from 'react'
import {Link} from "react-router-dom"
import {Loader} from '../../Heroes/Components/Loader'
 const Card = ({imagen,nombre,id,descripcion}) => {
  lazy(()=>imagen)
  
  return (
    <div className='w-[250px] h-auto mx-2 my-1 justify-self-center  border-2 border-blue-600  hover:border-solid hover:border-2 hover:border-yellow-300 '
   >
    <div className=' flex flex-col items-center w-full  h-auto text-white'
     >
      <Suspense  fallback={<Loader/>} >
         <img src={imagen}
      alt={nombre}
      className='w-full h-[350px]'/>
        </Suspense> 
     

      <p className='bg-gray-400 w-full text-center'>{nombre}</p>
      
      <p className='bg-gray-500'>{descripcion.substring(0,60).concat("...")}</p>
       
      <Link to={`/heroe/${id}`}>
      <button className='w-[200px] bg-blue-500 h-auto py-2 px-8 mx-2 my-2 rounded-md hover:bg-blue-800 hover:font-bold'>Más</button>
      </Link> 
      
    </div>
  </div>
  )
}
export{Card}