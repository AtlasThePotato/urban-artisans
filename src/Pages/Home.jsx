import {Link} from 'react-router-dom'

import Logo from '../assets/Urban Artisans Title (Color).png'
import MenuFoodPicture from '../assets/menu-food.png'

export default function Home() {
    return(
    <>
        
        <img src={Logo} className="h-[32rem] m-auto mt-12"/>
        <div className="h-1 max-w-[80rem] bg-white m-auto mb-4"/>
        <h1 className="text-center m-auto font-['hey-november'] text-6xl mb-8">Powered By Creativity</h1>


        <div className="bg-gradient-to-t from-purple-500 to-pink-500 border-t-4 border-yellow-400 border-solid border-b-4 py-6">
            <h1 className="font-['abuget'] text-center text-[9rem] leading-none">Welcome To Urban Artisans!</h1>
            <p className="tracking-[0.8rem] text-center m-auto text-xl mb-2">THE COMMUNITY THAT INSPIRES ONE ANOTHER</p>
            <div className="h-1 max-w-[80%] bg-white m-auto mb-8"/>
            <p className="max-w-[60%] text-center m-auto text-lg mb-6  ">Welcome to Urban Artisans, your one-stop shop for the finest flavors and brews coffee can provide! However, we’re not just your average coffee shop. At Urban Artisans, we are a community of creatives, whether it be in coffee or not, who constantly drive to change our world for the better! We invite you to join our community, where we hold passion for all flavors of creativity!</p>

            <Link to="/about"><button className="border-2 tracking-[0.2rem] border-solid rounded-lg px-12 py-2 block m-auto hover:bg-white hover:text-black transition-all hover:font-semibold">LEARN MORE ABOUT US</button></Link>
        </div>

        <div className="bg-[url('/src/assets/home-coffee-bg.jpg')] bg-cover bg-center">
            <h1 className="text-8xl pt-6 font-['hey-november'] text-center m-auto">Our Coffee</h1>
            <p className="tracking-[0.8rem] text-center m-auto text-xl mb-2">A UNIQUE FLAVOUR LIKE NO OTHER</p>
            <div className="h-1 max-w-[80%] bg-white m-auto mb-8"/>
            <p className="max-w-[60%] text-center m-auto text-lg mb-6  ">At Urban Artisans, we strive to bring our own unique flavor onto the world. That’s why when you order at Urban Artisans, every menu item is something you can only get at Urban Artisans. One example would be our “Boba Coffee”, a blend of South-east Asian Bubble tea and chewy tapioca  mixed in with the energetic flavor of coffee! We also like to specialize in the underdogs of the coffee world, like the Cold Brew, and of course, we understand the occasional desire for something simple, so we got your good old Espressos too! No matter where you go, Urban Artisans will always have a fresh cup of your coffee for you, grown in Columbia and freshly brewed at your local Urban Artisans. While you wait for your coffee, why not grab a delicious, mouth-watering snack to compliment your coffee?</p>


            <Link to="/menu"><button className="border-2 tracking-[0.2rem] border-solid rounded-lg px-12 py-2 block m-auto hover:bg-white hover:text-black transition-all hover:font-semibold mb-6">VIEW OUR SELECTION</button></Link>

            <div className="h-96 w-full bg-[url('/src/assets/menu-food.png')] m-auto bg-cover bg-center mb-6"/>
            <div className="pb-6"/>
        </div>

        <div className="  border-t-4 border-yellow-400 border-solid border-b-4 py-6">
            <h1 className="font-['abuget'] text-center text-[9rem] leading-none">Our Designer Cups</h1>
            <p className="tracking-[0.8rem] text-center m-auto text-xl mb-2">A CUP THAT REPRESENTS YOU AND THE ENVIRONMENT</p>
            <div className="h-1 max-w-[80%] bg-white m-auto mb-8"/>
            <p className="max-w-[60%] text-center m-auto text-lg mb-6  ">However, our creative expression does not end with coffee. In addition, we also design some awesome cups as well, ready for you to take anywhere and everywhere. These durable, stainless steel cups are not only amazing for storing coffee, water, or anything else, but it comes wrapped with an awesome piece of artwork designed by some of the most talented artists in our communities! However, our preference for reusable cups doesn’t stem just from creative expression, but also from our care and respect for our community and the Earth around us. Each year, 50 billion cups of coffee are tossed into our environment, and this is how we want to change that by promoting reusability, all the while giving you the morning energy boost we all need. Of course, as a little bonus, these cups give you a 10% discount on ALL coffee items. We release these in series, so check back each season for the newest and latest designs! </p>

            <Link to="/about"><button className="border-2 tracking-[0.2rem] border-solid rounded-lg px-12 py-2 block m-auto hover:bg-white hover:text-black transition-all hover:font-semibold">VIEW THE LATEST DESIGNS</button></Link>
        </div>


    </>
    )
}