

export default function Menu(){
    return(
        <>

            <div className="flex mx-16 justify-center items-center my-0 mt-6">
                <div className="flex-grow h-1 bg-white max-w-full"/>
                <h1 className="tracking-[0.4rem] text-2xl mx-8 leading-[0.0]">FEATURED SPECIAL</h1>
                <div className="flex-grow h-1 bg-white max-w-full"/>
            </div>

            <div className="border-4 border-white border-solid border-t-0 mx-16 m-0 mb-16">
                <h1 className="text-[10.5rem] leading-[1] text-center m-auto font-['hey-november'] pt-6 mb-2">Cold Chocolate Brew</h1>
                <div className="m-auto h-1 bg-white mb-2 max-w-[80%]"/>

                <p className="text-center text-2xl tracking-[0.4rem] mb-2">SM: $4.00 | MD: $4.50 | LG: $4.75</p>

                <div className="m-auto h-1 bg-white mb-6 max-w-[80%]"/>

                <p className="text-center m-6">Chill down this summer with a new, even sweeter variant of our classic Signature Cold Brew, now here with a chocolatey twist! Introducing the Cold Chocolate Brew, featuring three layers of chocolate sweetness, all with the energizing boost you get from our classic Cold Brew! Available from June 3, 2024 to September 20, 2024, enjoy the cold, refreshing chocolate of our latest brew as you enjoy the hot summer!</p>

            </div>

            <div className="mx-48 flex items-center justify-center mb-6">
                <div className="flex-grow h-[0.1rem] bg-white max-w-full"/>
                <h1 className="tracking-[0.4rem] text-xl mx-8 leading-[0.0]">COFFEE</h1>
                <div className="flex-grow h-[0.1rem] bg-white max-w-full"/>
            </div>

            <div className="flex justify-center items-center mx-48 mb-6">
                <h1 className="ml-6"></h1>
                <div className="flex-grow"/>
                <p className="w-24 text-center font-bold">SM</p>
                <p className="w-24 text-center font-bold">MD</p>
                <p className="w-24 text-center font-bold">LG</p>
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Classic Espresso</h1>
                <div className="flex-grow"/>
                <p className="w-24 text-center">$3.25</p>
                <p className="w-24 text-center">$3.75</p>
                <p className="w-24 text-center">$4.00</p>     
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Signature Cold Brew</h1>
                <div className="flex-grow"/>
                <p className="w-24 text-center">$3.00</p>
                <p className="w-24 text-center">$3.50</p>
                <p className="w-24 text-center">$3.75</p>     
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Boba Coffee</h1>
                <div className="flex-grow"/>
                <p className="w-24 text-center">$3.50</p>
                <p className="w-24 text-center">$4.00</p>
                <p className="w-24 text-center">$4.25</p>     
            </div>

            <div className="flex justify-center items-center mx-48 mb-8">
                <h1 className="ml-6 text-lg">Ice Coffee</h1>
                <div className="flex-grow"/>
                <p className="w-24 text-center">$3.50</p>
                <p className="w-24 text-center">$3.75</p>
                <p className="w-24 text-center">$4.25</p>     
            </div>

            <div className="mx-48 flex items-center justify-center mb-12">
                <div className="flex-grow h-[0.1rem] bg-white max-w-full"/>
                <h1 className="tracking-[0.4rem] text-xl mx-8 leading-[0.0]">DESERTS & SNACKS</h1>
                <div className="flex-grow h-[0.1rem] bg-white max-w-full"/>
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Butter Tarts</h1>
                <div className="flex-grow"/>
                <p className="w-72 text-right mr-7">$1.00</p>
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Cheese Tarts</h1>
                <div className="flex-grow"/>
                <p className="w-72 text-right mr-7">$1.00</p>
            </div>

            <div className="flex justify-center items-center mx-48 mb-2">
                <h1 className="ml-6 text-lg">Chewy Chocolate Cookie</h1>
                <div className="flex-grow"/>
                <p className="w-72 text-right mr-7">$1.50</p>
            </div>

            <div className="flex justify-center items-center mx-48 mb-12">
                <h1 className="ml-6 text-lg">Croissant</h1>
                <div className="flex-grow"/>
                <p className="w-72 text-right mr-7">$1.50</p>
            </div>

            <div className="h-80 mx-32 bg-[url('/src/assets/menu-food.png')] bg-cover bg-center mb-6"/>

            
            
        </>
    )
}