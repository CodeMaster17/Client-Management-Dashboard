import React from 'react'
import heroImage from "/assets/Traveller.png"
const HeroArea = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className='uppercase text-darkOrange text-lg'>Best Destinations around the world</p>
                    <h1 className='text-3xl mt-3 leading-[8rem] font-Volkhov text-black'>Travel, enjoy <br /> and live a new <br /> and full life</h1>
                    <p className="mb-8 mt-3 text-sm leading-relaxed">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                    </div>
                </div>
                <div className="border-2 w-[30vw]">
                    <img className="object-cover object-center rounded" alt="hero" src={heroImage} />
                </div>
            </div>
        </section>
    )
}

export default HeroArea