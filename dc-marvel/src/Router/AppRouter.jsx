import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { LoginPage } from '../Authentication'
import { HeroesRoutes } from '../Heroes'

const AppRouter = () => {
  return (
    <>
    
      <Routes>
       
        <Route path='login' element={<LoginPage />}/>
        <Route path='/*' element={<HeroesRoutes />}/>
      </Routes>
    </>
  )
}

export  {AppRouter}