import React from 'react'
import { useEffect } from 'react';
import {useParams}from 'react-router-dom'
import {heroAPI} from '../../Api/HeroesAPI'
import { Modal } from '../../Design/Components/Modal';
import {useMyStates} from '../Components/CustomHooks'

const HeroePage = () => {
const{
  modal,
  setModal
}=useMyStates()

  //este heroId lo declaramos en las rutas como parámetro
  const {heroId}=useParams()
  const [getHeroes, setGetHeroes] = React.useState([])

  useEffect(() => {
    obtenerHeroes();
  }, [])
  

  const obtenerHeroes = async()=>{
    try {
      const response=await heroAPI.get(`/superheroes/${heroId}`)
      setGetHeroes(response.data)
      
    } catch (error) {
      console.log(error)
    }

  }
    

  return (
    <div className={`w-screnn h-screen flex flex-col justify-center `}
    
    >
      {modal && <Modal 
       image1={getHeroes.imagen2}
       image2={getHeroes.imagen3}
       image3={getHeroes.imagen4}
       name={getHeroes.nombre}
       
       
      
      />}
      <span className='absolute top-[100px] right-4 text-yellow-500 font-bold text-2xl cursor-pointer'
       onClick={()=>setModal(prevState=>!prevState)}
      >Más imagenes</span>
      <img className='w-[250px] h-[350px] place-self-center mt-[350px] md:mt-[40px] hover:cursor-pointer' src={getHeroes.imagen} alt={getHeroes.nombre}/>

     
      <div className='flex flex-col bg-gray-500 w-full h-full mt-3 text-left text-2xl text-white px-2'>
        <p > <span className='font-bold text-yellow-300'>Top</span> {getHeroes.top}</p>
      <p><span className='font-bold text-yellow-300'>Nombre</span> {getHeroes.nombre}</p>
      <p><span className='font-bold text-yellow-300'>Estreno</span> {getHeroes.estreno}</p>
      <p><span className='font-bold text-yellow-300'>Editorial</span> {getHeroes.editorial}</p>
      <p><span className='font-bold text-yellow-300'>Poderes</span>{getHeroes.poderes}</p>
      <p className='pb-10'><span className='font-bold text-yellow-300 '>Descripción</span> {getHeroes.descripcion}</p>
     
      
      </div>
      
      
      
      
      
    </div>
  )
}

export { HeroePage}