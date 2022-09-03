import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { LoginPage } from '../Authentication/Pages/LoginPage'
import { DcPage } from '../Heroes/Pages/DcPage'
import { MarvelPage } from '../Heroes/Pages/MarvelPage'
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={<MarvelPage />}/>
        <Route path='dc' element={<DcPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='/' element={<Navigate to="/login" />}/>
      </Routes>
    </>
  )
}

export  {AppRouter}