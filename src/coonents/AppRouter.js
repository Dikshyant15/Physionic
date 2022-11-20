import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import Pricing from './Princing'
import { BrowserRouter, Route,Routes } from "react-router-dom"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/services" element={<Services/>}/>
            <Route exact path="/pricing" element={<Pricing/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter