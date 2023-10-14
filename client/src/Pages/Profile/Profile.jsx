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
import Female from '../../assets/Female.png'
import Male from '../../assets/Male.png'
import location from '../../assets/location.png'
import date from '../../assets/date.png'
import ButtonComponent from '../../utils/Button/Button';

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
                showspin ? <Spinner /> : <div className="profileCardContainer">
                    <div className='profileCard'>


                        <div className="thubmnailContainer">
                            <div className="thumbnailImageContainer ">
                                {/* <img src={`${BASE_URL}/uploads/${userprofile.profile}`} alt="" /> */}
                                <img src={profileimg} className="thumbnailImage" />
                            </div>
                        </div>


                        <div className='userInformationContainer'>

                            <div className='detailsContainer'>
                                <div>
                                    <div className='username_div'>{userprofile.fname + " " + userprofile.lname}</div>

                                    <div className='email_div'>{userprofile.email}</div>
                                    <div className='phone_gender_div'>{userprofile.mobile}</div>
                                    <div className='phone_gender_div'><img className='genderImage' src={userprofile.gender === 'Female' ? Female : Male}/>{userprofile.gender}</div>
                                </div>
                                <div className="button_div"><ButtonComponent text={userprofile.status} variant={userprofile.status === 'Active' ? 'blue' : 'orange'} /></div>
                            </div>

                            <div className='paragraphContainer'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consectetur? autem optio iusto, culpa cum, quasi maxime sed provident quod molestias libero quibusd officia ex accusamus maiores! Amet, reiciendis.</div>

                            <div className='loaction_dateContainer'>
                                <div className='locationContainer'><img className='locationImage' src={location} />&nbsp;{userprofile.location}</div>

                                <div className='dateContainer'>
                                    <img className='dateImage' src={date} />
                                    <div className='dateTextContainer'>
                                        <div>Date Created &nbsp;- {moment(userprofile.datecreated).format("DD-MM-YYYY")}</div>
                                        <div>Date Updated&nbsp;- {userprofile.dateUpdated}</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            }

        </>
    )
}

export default Profile