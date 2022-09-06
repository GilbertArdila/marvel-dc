import React from 'react'

 const Card = ({key,imagen,nombre}) => {
  return (
    <div className='w-[250px] mx-2 my-0 justify-self-center'>
    <div className=' flex flex-col items-center w-[250px]  h-auto text-white' key={key}>
      <img src={imagen}
      className='w-[250px] ' />
      <p>{nombre}</p>
    </div>
  </div>
  )
}
export{Card}