import React from 'react'
import { useEffect } from 'react'
import {Card} from '../../Design/Components'

const DcPage = () => {
  const [api, setApi] = React.useState([])

  useEffect(() => {
    API()

  }, [])

  const API = async () => {
    const response = await fetch('https://fakeapiheroes.herokuapp.com/superheroes')
    const data = await response.json()
    setApi(data)

  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center  bg-black w-screen h-screen '>
      {api.map((heroe) => (
        <Card
         key={heroe.nombre}
         imagen={heroe.imagen}
         nombre={heroe.nombre}
        />
       


      ))}

    </div>
  )
}

export { DcPage }