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
import Gallery from './Pages/Gallery'

import BlogOperations from './Pages/blogposts/Blog-Operations'
import BlogPlan from './Pages/blogposts/Blog-Plan'

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
            <Route path="gallery" element={<Gallery/>}/>

            <Route path="blog/our-long-term-plan-moving-forward" element={<BlogOperations/>}/>
            <Route path="blog/how-we-re-achieving-our-plans-operationally" element={<BlogPlan/>}/>
            
        
          </Route>

         
        </Routes>
      
    
     
    </>
  )
}

export default App
