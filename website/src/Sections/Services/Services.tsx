import React from 'react'
import { servicesCardsData } from "../../Data/data"
import Servicescards from '../../Components/Cards/Servicescards'

const Services = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 w-full justify-center">
                    {servicesCardsData.map((item, index) => {
                        return (
                            <>
                                <Servicescards src={item.src} cardHeading={item.cardHeading} cardParagraph={item.cardParagraph} />
                            </>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default Services