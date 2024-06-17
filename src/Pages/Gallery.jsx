import {useState, useEffect, useRef} from 'react'

import Submark from '../assets/submark.png'
import Logo from '../assets/Urban Artisans Title (Color).png'
import sansSerifLogo from '../assets/urbart-sans-serif-logo.png'
import Motto from '../assets/urbart-motto-fonts.png'


export default function Gallery(){
    window.scrollTo(0,0)

    const [image, setImage] = useState(Submark);
    const [closeUpText, setCloseUpText] = useState(["THE URBAN ARTISANS SUBMARK", "The Submark Of Urban Artisans"])
    const closeUpRef = useRef();
    const galleryImages = [Submark, Logo, Motto, sansSerifLogo];

    function openDialog(type){
        closeUpRef.current.classList.remove('invisible');
        try {
            setImage(type);

            if (type == Submark){
                setCloseUpText( t => ['Urban Artisans Submark', "The official logo and submark of Urban Artisans, symbolizing what we hold dearest. The coffee represents our bread and butter as an establishment, our unique and refreshing coffee, while the paintbrush symbolizes the dedication we have to our aforementioned craft, treating the act of brewing coffee as if it were an artform."]);
            } else if (type == Logo) {
                setCloseUpText(t => ["Urban Artisans Main Logo", "The primary logo of Urban Artisans, intended to be the one most affiliated with the brand. The unusual choice of font emphasizes one of our key values in Urban Artisans, which is the expression of humanity through art. It also features elements of our submark as well."])
            } else if (type == Motto) {
                setCloseUpText(t => ["Urban Artisans Font Palette & Motto", "Our motto: “Powered By Creativity”. As a brand, we emphasize the necessity of creativity and uniqueness, whether that be in our selection of coffee, or perhaps our social responsibility initiatives that encourage the young and / or aspiring to pursue their dreams. Urban Artisans is also a brand that places emphasis on supporting its community, and by supporting our members to use their creativity for the betterment of not only themselves, but for all, we are powered by creativity. The fonts utilized here are also the primary fonts that will be used in our marketing media, and it also features our color palette of orange, yellow, and purple. Yellow and orange represent a vibrant and energetic tone, which goes hand in hand with our motto and what we do: making coffee that energizes people. Purple is often associated with neon-themed aesthetics, which is one of our main inspirations within our overall branding and floor plans."])
            } else if (type == sansSerifLogo) {
                setCloseUpText(t => ["Urban Artisans San Serif Logo", "A variant of the original logo, this particular logo is designed to be much more formal and versatile, and will often be used for official / business-orientated documents. It still incorporates some hallmarks of the original logo, like the cup and paintbrush."])
            } else{
                setCloseUpText(t => ["", ""])
            }
        }
        catch (error){
            console.error(error)
            }
        }
    

    return(
        <>

            <h1 className="text-8xl tracking-[0.1rem] text-center mt-12 mb-1 font-['hey-november']">The Urban Artisans Vision Board</h1>
            <h1 className="text-xl tracking-[0.8rem] text-center mb-4">THE GALLERY OF AESTHETICS</h1>
            <div className="bg-white h-1 w-96 m-auto mb-8"/>

            <h1 className="text-center mb-12">Click each image to see a brief explanation and history of that image!</h1>

            {galleryImages.map((img) => {
                return (
                    <img src={img} onClick={() => {openDialog(img);}} className="h-48 m-auto block my-6 hover:cursor-pointer transition-all hover:scale-110"/>

                );
            })}
            
            


            <div ref={closeUpRef} className="fixed w-screen h-screen bg-opacity-50 bg-black top-0 flex items-center justify-center invisible">
                <div className="w-[90%] h-[90%] bg-gray-700  rounded-lg overflow-y-scroll">
                    <div className="w-full bg-gray-900 h-12 flex items-center justify-end "><button onClick={() => {closeUpRef.current.classList.add('invisible')}} className="text-red-500 text-2xl bg-white px-4 text-right rounded-md text-bold block mx-4">X</button></div>
                    <img src={image} className="h-[55%] m-auto my-6"/>
                    <h1 className="m-auto text-center text-7xl my-6 font-['hey-november'] leading-[0.65]">{closeUpText[0]}</h1>
                    <p className="text-lg text-center max-w-[60%] m-auto mb-4">{closeUpText[1]}</p>
            
                </div>
            </div>

        </>
    )

}