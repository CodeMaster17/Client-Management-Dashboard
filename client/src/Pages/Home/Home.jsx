import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Headers from '../../components/Headers/Headers'
import { Outlet } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className=' homeContainer'>
            <Sidebar />
            <div className='alignmentContainer'>
                <Headers />
                <div className='outletContainer'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home