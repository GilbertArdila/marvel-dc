import React from 'react'
import { useNavigate } from 'react-router-dom'
import marvel from '../../assets/marvel.png'
import dc from '../../assets/dc.webp'

const InicioPage = () => {
  const navigation = useNavigate()
  const onMarvelClick = () => {
    navigation("/marvel", {
      replace: true
    })
  }

  const onDcClick = () => {
    navigation("/dc", {
      replace: true
    })
  }
  
  return (

    <div className='w-sceen h-screen grid-rows-[(50px,_1fr)]'>
      <h3 className='w-full  my-4 text-xl text-black font-semibold text-center'>¿Qué quieres ver?</h3>

      <div className='grid grid-colums-2 w-full h-auto mt-16 md:flex  '>
        <div
          className='w-1/2  mx-auto my-4 cursor-pointer md:w-[350px] md:h-[300px] md:my-0 '
          onClick={onMarvelClick}
        > <img src={marvel} 
        className='rounded-2xl border-2 border-white w-full h-full hover:border-yellow-400 hover:border-4' /> </div>
        
        <div
          className='w-1/2  mx-auto cursor-pointer md:w-[350px] md:h-[300px] '

          onClick={onDcClick}
        > <img src={dc}
         className='rounded-2xl border-2 border-white w-full h-full hover:border-yellow-400 hover:border-4'/></div>

      </div>

    </div>
  )
}

export { InicioPage }