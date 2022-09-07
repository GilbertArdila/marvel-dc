import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { heroAPI } from '../../Api/HeroesAPI'
import { Modal } from '../../Design/Components/Modal';
import { useMyStates } from '../Components/CustomHooks'
import {Loader} from '../Components/Loader'

const HeroePage = () => {

  const {
    modal,
    setModal
  } = useMyStates()

  //este heroId lo declaramos en las rutas como parámetro
  const { heroId } = useParams()
  const [getHeroes, setGetHeroes] = React.useState([])
  const navigate=useNavigate()

  useEffect(() => {
    obtenerHeroes();
  }, [])


  const obtenerHeroes = async () => {
    try {
      const response = await heroAPI.get(`/superheroes/${heroId}`)
      setGetHeroes(response.data)

    } catch (error) {
      console.log(error)
    }

  }
  
  const onBack=()=>{
    navigate(-1)
  }
  if(!getHeroes.length){
    return (
      <div className=' w-screen h-screen flex justify-center items-center bg-black'>
        <Loader/>
      </div>
    )
   }
  return (
    <div className={`w-screnn  grid grid-rows-[500px_minmax(500px,_1fr)_100px] `}

    >
      {modal && <Modal
        image1={getHeroes.imagen2}
        image2={getHeroes.imagen3}
        image3={getHeroes.imagen4}
        name={getHeroes.nombre}



      />}
      <span className='absolute top-[100px] right-4 text-yellow-500 font-bold text-2xl cursor-pointer'
        onClick={(e) => {
         
          e.currentTarget.innerText==='Cerrar'?e.currentTarget.innerText='Más imagenes':e.currentTarget.innerText='Cerrar'
          setModal(prevState => !prevState)
        }}
      >Más imagenes</span>
     
        <img className='w-[250px] h-[350px] place-self-center   md:w-[350px] md:h-[450px]' src={getHeroes.imagen} alt={getHeroes.nombre} />
        <div className='flex flex-col bg-black w-3/4 mx-auto h-auto mt-3 text-left text-2xl text-white px-2 border-2 border-blue-700 border-solid'>
          <p > <span className='font-bold text-yellow-300'>Top:{" "}</span> {getHeroes.top}</p>
          <p><span className='font-bold text-yellow-300'>Nombre:{" "}</span> {getHeroes.nombre}</p>
          <p><span className='font-bold text-yellow-300'>Estreno:{" "}</span> {getHeroes.estreno}</p>
          <p><span className='font-bold text-yellow-300'>Editorial:{" "}</span> {getHeroes.editorial}</p>
          <p><span className='font-bold text-yellow-300'>Poderes:{" "}</span>{getHeroes.poderes}</p>
          <p className='pb-10'><span className='font-bold text-yellow-300 '>Descripción:{" "}</span> {getHeroes.descripcion}</p>
        </div>
        <button className='w-[150px] h-auto p-2 font-bold text-lg bg-blue-500 mx-auto my-4 hover:bg-blue-700 '
        onClick={onBack}
        >Back</button>
      </div>









    
  )
}

export { HeroePage }