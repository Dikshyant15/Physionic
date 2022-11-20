import React from 'react'
import {Home} from './home'
import {Login} from './login'
import { BrowserRouter, Route,Routes } from "react-router-dom"


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

