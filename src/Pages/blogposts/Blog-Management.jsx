import {Link} from 'react-router-dom'

export default function BlogManagement(){
    window.scrollTo(0,0)

    return(
        <>
            <h1 className="text-7xl text-center mt-6 mb-3 font-['hey-november']">Our Long-Term Plan Moving Forward</h1>
            <p className="text-center text-xl tracking-[0.6rem] mb-4">BY: AIDAN TANG | JUNE 19, 2024 | 5 MINUTE READ</p>
            <div className="w-[55%] h-1 bg-white m-auto mb-6"></div>
            <div className="w-4/12 h-96 bg-[url('/src/assets/blog-plan-thumbnail.jpg')] bg-center bg-cover m-auto brightness-110 mb-6"/>

            <p className="mb-6 w-3/5 text-center m-auto">At Urban Artisans, we are always striving for greater, and wanting to be able to support more in their endeavours, whether it be by supplying them with some delicious coffee and snacks, or through our social initiatives, and as such, our current plan in the next few years is to open up a brand new Urban Artisans location.</p>
            <p className="mb-6 w-3/5 text-center m-auto">For this endeavour, we believe that a very optimal location for our next store would be within the area surrounding the Toronto Metropolitan University (formerly Ryerson University). Not only would this location be downtown, meaning much more potential traffic. We also chose this location due to the proximity towards our preferred target demographic, which are young, socializable people, preferably with a professional/business or artistic background. The Toronto Metropolitan University, being best known for its programs in the arts and business, makes it an exceptionally optimal location for us to conduct business.</p>
            <p className="mb-6 w-3/5 text-center m-auto">As such, for now, our goal is to raise enough capital and funds in order to receive a second location. In order to make sure we’re constantly on the right track, we have developed a few Key Performance Indicators (KPIs) that we can measure in order to receive a decent scale on where we’re at in terms of our goals. </p>
            <p className="mb-6 w-3/5 text-center m-auto">One such KPI we can gauge is our sales in both coffees, as well as our designer cups. Not only is this our main source of income, but it also does gauge the effectiveness of our marketing campaigns as well. We can also use this data to see what drinks have been popular with our audience, and what hasn’t, and adapt our overall business strategy to cater towards the desires of our target demographic. </p>
            <p className="mb-6 w-3/5 text-center m-auto">Another indicator that can be used to gauge success is in customer satisfaction surveys and other such similar tools. Just because somebody purchases a product doesn’t mean they are completely satisfied with it. By using these surveys, we can discover any weak points within our current structure and address them (if needed) before a competitor that better suits a customer's needs removes their patronage from our coffee shop. </p>
            <p className="mb-6 w-3/5 text-center m-auto">One last KPI we can use is tracking our revenue/expense ratios throughout monthly installments. This way, we can discern what factors at the time have improved our ratios, how we could replicate such factors, or perhaps remove negative factors, and act upon our weak spots. At the same time, we believe that for a business to be successful, it must always be growing, and as such, keeping track of these ratios will be crucial in maintaining our growth.</p>
            <p className="mb-6 w-3/5 text-center m-auto">Using these three KPIs, our plan is to gather enough capital in order to open up another store within Toronto’s downtown area and add another community towards our reach! Next week, we’ll upload an article explaining what we’ll do to fulfill our goals.</p>

            <Link to="/blog"><button className="block m-auto border-white border-solid border-2 py-1 w-2/5 transition-all hover:bg-white rounded-lg hover:text-black mb-12 text-2xl tracking-[0.8rem]">BACK TO BLOG</button></Link>
        </>
    )

}