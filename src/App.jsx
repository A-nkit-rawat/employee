import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<List></List>} ></Route>
        <Route  path="/profile" element={<Profile></Profile>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
      
    
  )
}

export default App
