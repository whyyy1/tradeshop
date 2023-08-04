import React from 'react'
import Loading from '../pages/AuthPages/Loading'
import Login from '../pages/AuthPages/Login'
import Register from '../pages/AuthPages/Register'

import { Routes, Route } from 'react-router-dom'
import AuthNavBar from '../Navigation/AuthNavBar'


function AuthStack() {
    return (
        <>
        <AuthNavBar/>
            
            
            <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
       
            </Routes>
            
        </>
    )
}

export default AuthStack