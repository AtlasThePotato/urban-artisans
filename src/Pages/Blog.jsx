import {Link} from 'react-router-dom'
import { useSetUp } from '../Hooks/useSetUp'

export default function Blog(){
    useSetUp();
    return(
        <>
            <h1 className="mt-4 font-['abuget'] text-[9rem] m-auto text-center leading-[1.1]">The Artisan's Sample</h1>
            <p className="tracking-[0.4rem] m-auto text-center text-xl mb-6">ALL THE LATEST IN URBAN ARTISANS</p>
            <div className="h-1 max-w-[18rem] bg-white m-auto mb-10"/>
            <p className="w-3/5 text-center mb-6 m-auto">Welcome to The Artisan's Sample, where we share all that's latest in Urban Artisans, whether it be recognizing our members for their achievements, our plans for the future, adn anything else that might come! In addition to monthly newsletters, we also provide a select few stories to curate and post here in  this blog section! Check them out!</p>
            
            <a target="_blank" href="https://www.canva.com/design/DAGCCXJbyXc/dqTgQmiTh1ytE7ulgaDllA/view?utm_content=DAGCCXJbyXc&utm_campaign=designshare&utm_medium=link&utm_source=editor"><button className="bg-none border-white border-solid border-2 transition-all tracking-[0.4rem] rpunded-lg block m-auto px-16 py-1 mb-6 rounded-lg hover:bg-white hover:text-black">VIEW THE LATEST ISSUE</button></a>
            <div className=" h-[0.125rem] bg-white mx-12"/>

            <div className="border-solid border-b-2 border-white mx-12 flex">

                <div className="w-8/12">
                    <h1 className="my-6 text-6xl">Our Long-Term Plan Moving Forward</h1>
                    <div className="h-1 border-solid w-[90%] bg-white"/>
                    <p className="text-xl mb-6 mt-2">By: Aidan Tang | Published: June 11, 2024 | Type: Plans & Innovation</p>
                    <Link to="/blog/our-long-term-plan-moving-forward"><button className="border-solid border-white border-2 rounded-lg w-[40%] block tracking-[0.4rem] mb-6 hover:bg-white hover:text-black transition-all text-xl py-1">VIEW STORY</button></Link>
                </div>

                <div className="bg-center bg-cover bg-[url('/src/assets/blog-plan-thumbnail.jpg')] h-auto w-4/12 border-x-2 border-white border-solid"/>

            </div>

            <div className="border-solid border-b-2 border-white mx-12 flex mb-6">

                <div className="w-8/12">
                    <h1 className="my-6 text-6xl">How We're Achieving Our Plans (Operationally)</h1>
                    <div className="h-1 border-solid w-[90%] bg-white"/>
                    <p className="text-xl mb-6 mt-2">By: Aidan Tang | Published: June 19, 2024 | Type: Plans & Innovation</p>
                    <Link to="/blog/how-we-re-achieving-our-plans-operationally"><button className="border-solid border-white border-2 rounded-lg w-[40%] block tracking-[0.4rem] mb-6 hover:bg-white hover:text-black transition-all text-xl py-1">VIEW STORY</button></Link>
                </div>

                <div className="bg-center bg-cover bg-[url('/src/assets/blog-plan-thumbnail.jpg')] h-auto w-4/12 border-x-2 border-white border-solid"/>

            </div>

        </>
    )
}