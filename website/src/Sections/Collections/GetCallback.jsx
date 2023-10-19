import React from 'react'
import getCallBackImg from '../../../public/assets/explore/getCallback.jpg'
import Button from '../../Components/Buttons/Button'
const GetCallback = () => {
    return (
        <section className="text-gray-600 rounded-md shadow-cardShadowOrange max-w-[1200px] m-auto bg-white mt-8 body-font">
            <div className="container p-4 mx-auto">
                <div className="w-full  flex lg:justify-between sm:flex-row sm:items-center items-start ">
                    <div className='flex justify-center items-center'>
                        <img src={getCallBackImg} alt="" className='w-[100px] h-[100px] rounded-sm ' />
                        <div>
                            <h1 className="flex-grow sm:pr-16 text-xl-bold_darkorange ml-4">Bigger Group? Get special offers upto 50% off!</h1>
                            <p className='text-sm-light_gray ml-4'>We create unforgettable adventures, customised for your group.</p>
                        </div>
                    </div>
                    <Button large btngradient children={"Get callback"} />
                </div>
            </div>
        </section>
    )
}

export default GetCallback