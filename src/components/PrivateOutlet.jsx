import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Outlet,Navigate } from 'react-router-dom'


const PrivateOutlet = () => {
    const {currentUser}=useAuth()
  return currentUser ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateOutlet