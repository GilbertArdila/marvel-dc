import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../Design'
import { DcPage, MarvelPage,HeroePage,InicioPage } from '../Pages'

const HeroesRoutes = () => {
  return (
    <>
       <Navbar/>
       <Routes>
        <Route path='marvel' element={<MarvelPage />}/>
        <Route path='dc' element={<DcPage />}/>
        {/* heroe/:heroId declaramos este parámetro en el path */}
        <Route path='heroe/:heroId' element={<HeroePage />}/>
        <Route path='/inicio' element={<InicioPage/>}/>
        <Route path='/*' element={<Navigate to="/login" />}/>
      </Routes>
    </>
  )
}

export  {HeroesRoutes}