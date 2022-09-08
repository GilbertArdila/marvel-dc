import React from 'react'
import { useEffect } from 'react'
import { heroAPI } from '../../Api/HeroesAPI';
import { Card } from '../../Design/Components'
import {Loader} from '../Components/Loader'

const DcPage = () => {
  const [getHeroes, setGetHeroes] = React.useState([]);

  useEffect(() => {
    obtenerHeroes()

  }, [])

  const obtenerHeroes = async () => {
    try {
      const response = await heroAPI.get("/superheroes?tipo=heroes-dc");
      setGetHeroes(response.data)
      

    } catch (error) {
      console.log(error)
    }

  }
  if(!getHeroes.length){
    return (
      <div className=' w-screen h-screen flex justify-center items-center bg-black'>
        <Loader/>
      </div>
    )
   }
  return (
    <>
      <h3 className='my-5 text-center text-white text-xl font-bold'>Héroes <span className='text-red-500'>DC Comics</span> </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  bg-black w-screen h-screen '>
        {getHeroes.map((heroe) => (
          <Card
           key={heroe.id}
            id={heroe.id}
            imagen={heroe.imagen}
            nombre={heroe.nombre}
            descripcion={heroe.descripcion}
          />
        ))}

      </div>
    </>

  )
}

export { DcPage }