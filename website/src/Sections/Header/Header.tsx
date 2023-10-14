import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className="ml-3 text-[5rem] font-DancingScript">VoyagerVista</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-10 hover:text-gray-900 text-[2rem]">Destinations</a>
                    <a className="mr-10 hover:text-gray-900 text-[2rem]">Flights</a>
                    <a className="mr-10 hover:text-gray-900 text-[2rem]">Bookings</a>
                    <a className="mr-10 hover:text-gray-900 text-[2rem]">Hotels</a>
                </nav>
                <button className="inline-flex items-center ml-5 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base text-[2rem] mt-4 md:mt-0">Login

                </button>
                <button className="inline-flex items-center bg-gray-100 border-0 py-4 px-5 focus:outline-none hover:bg-gray-200 ml-3 rounded text-base text-[2rem] mt-4 md:mt-0">SignUp

                </button>

            </div>
        </header>
    )
}

export default Header