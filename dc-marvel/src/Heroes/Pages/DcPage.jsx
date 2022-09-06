import React from 'react'
import { useEffect } from 'react'
import { heroAPI } from '../../Api/HeroesAPI';
import { Card } from '../../Design/Components'

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

  return (
    <>
      <h3 className='text-center text-white text-lg my-5'>Heroes DC Comics</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  bg-black w-screen h-screen '>
        {getHeroes.map((heroe) => (
          <Card
           key={heroe.id}
            id={heroe.id}
            imagen={heroe.imagen}
            nombre={heroe.nombre}
          />
        ))}

      </div>
    </>

  )
}

export { DcPage }