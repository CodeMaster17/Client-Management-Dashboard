import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { singleUsergetfunc } from "../../services/Apis"
import { BASE_URL } from '../../services/helper'
import moment from "moment"
import "./profile.css"
import profileimg from '../../assets/profile.jpg'
import man from '../../assets/man-outline.svg'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import status from '../../assets/status.png'
import date from '../../assets/date.png'

const Profile = () => {

    const [userprofile, setUserProfile] = useState({});
    const [showspin, setShowSpin] = useState(true);

    const { id } = useParams();

    const userProfileGet = async () => {
        const response = await singleUsergetfunc(id);

        if (response.status === 200) {
            setUserProfile(response.data)
        } else {
            console.log("error");
        }
    }


    useEffect(() => {
        userProfileGet();
        setTimeout(() => {
            setShowSpin(false)
        }, 1200)
    }, [id])
    return (
        <>
            {
                showspin ? <Spinner /> : <div className="container">
                    <Card className='card-profile shadow col-lg-6 mx-auto mt-4'>
                        <Card.Body>
                            <Row>
                                <div className="col">
                                    <div className="card-profile-stats d-flex ">
                                        {/* <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" /> */}
                                        <img src={ profileimg}/>
                                    </div>
                                </div>
                            </Row>
                            
                            <div className='info'>
                                <h3 className='username'>{userprofile.fname + userprofile.lname}</h3>
                                <h4><img src={email}/>&nbsp;<span className='icon_heading'>Email</span>&nbsp;- <span className='details'>{userprofile.email}</span> </h4>
                                <h5><img src={phone}/>&nbsp;<span className='icon_heading'>Mobile</span>&nbsp;- <span className='details'>{userprofile.mobile}</span> </h5>
                                <h5><img src={man}/>&nbsp;<span className='icon_heading'>Gender</span>&nbsp;- <span className='details'>{userprofile.gender}</span> </h5>
                                <h4><img src={location}/>&nbsp;<span className='icon_heading'>Location</span>&nbsp;- <span className='details'>{userprofile.location}</span> </h4>
                                <h4><img src={status}/>&nbsp;<span className='icon_heading'>Status</span>&nbsp;- <span className='details'>{userprofile.status}</span> </h4>
                                <h5><img src={date}/>&nbsp;<span className='icon_heading'>Date Created</span>&nbsp;- <span className='details'>{moment(userprofile.datecreated).format("DD-MM-YYYY")}</span> </h5>
                                <h5><img src={date}/>&nbsp;<span className='icon_heading'>Date Updated</span>&nbsp;- <span className='details'>{userprofile.dateUpdated}</span> </h5>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            }

        </>
    )
}

export default Profile