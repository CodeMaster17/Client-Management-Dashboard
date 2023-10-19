import React from 'react'
import Rating from './Rating'
import Button from '../../Components/Buttons/Button'

const GuideOffers = () => {
    const days = 5
    const night = 3
    const rating = 3.60;
    const discountedPrice = 1000.00;
    const originalPrice = 2000.00;
    const roundedOffRating = Math.round(rating);
    console.log(roundedOffRating)
    const starsRender = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < roundedOffRating) {
                stars.push(<ion-icon name="star" style={{ color: '#FEB30D', fontSize: '16px' }} ></ion-icon>)
            } else {
                stars.push(<ion-icon name="star" style={{ color: '#D3D3D3', fontSize: '16px' }}></ion-icon>)
            }
        }
        return stars;
    }
    return (
        <section className='w-full bg-white shadow-cardShadowGray'>
            <div className='w-full  border-2 border-l-darkOrange py-4 px-4 flex justify-between items-center' >
                <div className='flex w-[60%]  items-center gap-4'>
                    <p className=' text-xxl-bold_darkorange'>O1</p>
                    <p className='text-lg-bold_black'>Highlights of Leh Ladakh with Pangong Lake</p>
                </div>
                <div className=''>
                    <Rating rating={rating} />
                    <br />
                    {starsRender()
                    }

                </div>
            </div>
            <img src="https://media1.thrillophilia.com/filestore/yjlfxuo5wxg1pzrfjsdgu0pgafyn_LADAKH.png?w=753&h=450&dpr=2.0" alt="" />
            <div className='py-4 px-4 flex justify-between '>
                <p className='flex justify-center gap-2 items-center text-sm'><ion-icon name="time-outline" style={{ color: '#FF5300', fontSize: '24px' }}></ion-icon>
                    {days}D/{night}N
                </p>
                <p className='flex justify-center items-center'>
                    <span className='text-lightGray line-through text-sm'>&#8377;{discountedPrice}</span>
                    &nbsp;
                    <span className='text-black text-xl'>&#8377;{originalPrice}</span>
                    &nbsp;
                    <span className='text-lightGray  text-sm'>per adult</span>
                </p>
                <Button primary large children="Book Guide" />
            </div>
        </section>
    )
}

export default GuideOffers