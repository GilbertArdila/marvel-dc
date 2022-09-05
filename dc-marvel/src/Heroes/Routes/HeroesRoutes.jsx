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
        <Route path='heroe' element={<HeroePage />}/>
        <Route path='/inicio' element={<InicioPage/>}/>
        <Route path='/*' element={<Navigate to="/login" />}/>
      </Routes>
    </>
  )
}

export  {HeroesRoutes}