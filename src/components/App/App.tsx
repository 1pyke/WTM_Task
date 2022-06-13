import React from 'react'
import Login from '../Pages/LoginForm/Login';
import SignUp from '../Pages/SignUpForm/SignUp';
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
    <Route path='/home' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App