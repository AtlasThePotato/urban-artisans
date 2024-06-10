import {Routes, Route, Outlet} from 'react-router-dom'

import Header from './Components/Header'

import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Mission from './Pages/Mission'
import Nav from './Pages/Nav'
import About from './Pages/About'
import Menu from './Pages/Menu'
import CompensationPackages from './Pages/CompensationPackages'
import Blog from './Pages/Blog'
import Invest from './Pages/Invest'

function App() {


  return (
    <>
      
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<Home/>}/>
            
            <Route path="jobs" element={<Jobs/>}/>
            <Route path="mission" element={<Mission/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="nav" element={<Nav/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="compensation-packages" element={<CompensationPackages/>}/>
            <Route path="invest" element={<Invest/>}/>
        
          </Route>

         
        </Routes>
      
    
     
    </>
  )
}

export default App
