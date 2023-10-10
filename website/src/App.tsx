import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from "./Sections/Header/Header"
import Home from './Pages/Home'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
