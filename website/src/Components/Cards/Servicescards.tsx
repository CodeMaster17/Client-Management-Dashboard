import React from 'react'

interface props {
    src: string,
    cardHeading: Text,
    cardParagraph: Text
}

const Servicescards: React.FC<props> = ({ src, cardHeading, cardParagraph }) => {
    return (
        <div className="p-5 md:w-1/5">
            <div className="h-full flex flex-col items-center border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="w-[10rem] h-[10rem]" src={src} alt="blog" />
                <div className="p-6 flex flex-col items-center">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{cardHeading}</h1>
                    <p className="leading-relaxed mb-3 text-center text-sm">{cardParagraph}</p>
                </div>
            </div>
        </div>
    )
}

export default Servicescards