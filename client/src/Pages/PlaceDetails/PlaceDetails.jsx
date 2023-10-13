import React from 'react'
import { useParams } from 'react-router-dom'
import './PlaceDetails.css'
import thumbnail from '../../../public/keith-misner-h0Vxgz5tyXA-unsplash.jpg'
const PlaceDetails = () => {

    const { id } = useParams()
    return (
        <div className='placeDetailsContainer' >
            <img src={thumbnail} alt="" className='placeThumbnail' />

            <div className='detailsContainer'>
                <img src={thumbnail} alt="" className='placeCover' />
                <div className='detailsDiv'>
                    <p className='placeDetailsPara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ab voluptas id, porro doloremque quibusdam ducimus repellat perferendis dicta fugiat!</p>
                    <p className='placeDetailsPara country' >India</p>
                    <p className='placeDetailsPara city'>Varanasi</p>
                    <p>Photography</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails