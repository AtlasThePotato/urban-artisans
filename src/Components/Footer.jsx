import Logo from '../assets/Urban Artisans Title (Monochrome).png'

export default function Footer(){
    return(
        <>
            <div className="bg-black py-6 border-t-4 border-yellow-400 border-solid ">
                <p className="text-center opacity-50 mb-6">This page is entirely fictional. </p>
                <img src={Logo} className="h-48  m-auto "/>
                <div className="h-1 w-[15rem] bg-white m-auto mt-2 mb-4"/>
                <h1 className="text-center tracking-[0.4rem] mb-6">© URBAN ARTISANS 2024</h1>

            </div>
            
        </>
    )
}