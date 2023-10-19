import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from "./Sections/Header/Header"
import Home from './Pages/Home'
import Collections from './Sections/Collections/Collections'

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>
    </>
  )
}

export default App
