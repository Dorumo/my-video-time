import React from 'react'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'

import { UserContextProvider } from './contexts/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Description from './pages/Description';

import './styles/main.css'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path="/login" element={ <Login /> } />

          <Route path="/register" element={ <Register /> } />

          <Route path="/description/:id" element={ <Description /> } />
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App
