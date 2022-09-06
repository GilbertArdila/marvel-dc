import React from 'react'

 const Card = ({imagen,nombre,id}) => {
  return (
    <div className='w-[250px] h-[380px] mx-2 my-1 justify-self-center cursor-pointer hover:border-solid hover:border-2 hover:border-yellow-300'
   >
    <div className=' flex flex-col items-center w-full  h-auto text-white'
     >
      <img src={imagen}
      alt={nombre}
      loading={'lazy'}
      className='w-full h-[350px]'/>
      <p>{nombre}</p>
    </div>
  </div>
  )
}
export{Card}