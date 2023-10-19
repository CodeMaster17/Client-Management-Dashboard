import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://i.pinimg.com/1200x/0c/ae/b2/0caeb2d083c0eefa8b37eeee37b6028a.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/red-hot-air-balloons-over-jungle-nyaung-u-mandalay-royalty-free-image-1693419727.jpg?crop=0.681xw:1.00xh;0.272xw,0&resize=640:*',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/1539700/pexels-photo-1539700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

]

export default function Destinations() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-[1200px]   w-full px-4  sm:px-6 sm:py-24 lg:max-w-8xl lg:px-8">

                <div className="mt-6 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="w-full h-full  flex flex-col justify-center items-start">

                        <h1 className="text-xl text-left mt-[-5rem] font-black">Discover Your Ideal Retreat</h1>
                        <br />
                        <div className="w-[20%] border-2 border-darkOrange "></div>
                        <br />
                        <h1 className="text-sm text-left font-poppins font-medium ">Unearth Your Perfect Adventure</h1>

                    </div>
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <Link to={"/"}>

                                <div className="h-[40rem] w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-100 rounded-md">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            </Link>
                            {/* <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}