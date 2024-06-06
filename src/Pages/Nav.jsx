import {Link} from 'react-router-dom'
import Logo from '../assets/Urban Artisans Title (Color).png'



export default function Nav(){
    return(
        <>

            <div className="w-screen h-screen fixed z-10 bg-[url('/src/assets/urbart-bg-pattern.jpg')] bg-repeat bg-auto bg-center text-white top-0 flex flex-col items-center justify-center">

                <div className=" w-[90%] m-auto text-center">
                    <img src={Logo} className="h-48 m-auto"/>
                    <p className="mb-6 tracking-[0.8rem] text-xl">TORONTO 2024</p>
                    <div className="bg-white p-[0.1rem] mx-[40%] mb-12"/>

                    
                    <Link to="/"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">HOME</button></Link>
                    <Link to="/menu"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">MENU</button></Link>
                    <Link to="/"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">BLOG</button></Link>
                    <Link to="/about"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">ABOUT US</button></Link>
                    <Link to="/"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">FOR INVESTORS / PARTNERS</button></Link>
                    <Link to="/jobs"><button className="tracking-[0.3rem] text-xl bg-none text-center w-96 py-1  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out duration-300 mb-6 block m-auto">JOBS</button></Link>
                    
                

                    

                </div>
                
                

            </div>
            
        </>
    )
}