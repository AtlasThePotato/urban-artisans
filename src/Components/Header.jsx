import {Outlet, Link} from 'react-router-dom'
import {useRef, useEffect} from 'react'

import Logo from '../assets/Urban Artisans Title (Monochrome).png'


export default function Header(){

    
    return(
        <>

            

            <div className="w-screen bg-gray-950 flex py-2 px-8 items-center justify-center border-b-4 border-solid border-yellow-500">
                <img src={Logo} className="h-20"/>
                <div className="flex-grow"/>
                <Link to="/nav"><button className="border-white tracking-[0.2rem] font-bold hover:tracking-[0rem] border-solid border-2 px-4 py-1 bg-none rounded-lg transition-all hover:bg-white hover:text-black">MENU</button></Link>

            </div>

            

            

            <Outlet/>

        </>
    );
}