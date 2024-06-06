import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Mission from './Pages/Mission'
import Nav from './Pages/Nav'
import About from './Pages/About'
import Menu from './Pages/Menu'
import CompensationPackages from './Pages/CompensationPackages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            
            <Route path="jobs" element={<Jobs/>}/>
            <Route path="mission" element={<Mission/>}/>
            <Route path="nav" element={<Nav/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="compensation-packages" element={<CompensationPackages/>}/>
        
          </Route>

         
        </Routes>
      </BrowserRouter>
    
     
    </>
  )
}

export default App
