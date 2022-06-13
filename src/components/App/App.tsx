import React from 'react'
import Login from '../Pages/LoginForm/Login';
import SignUp from '../Pages/SignUpForm/SignUp';
import Home from '../Pages/home/Home';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App