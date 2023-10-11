import React, { useContext, useEffect, useState } from 'react'
import Card from "react-bootstrap/Card"
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import { registerfunc } from "../../services/Apis"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"
import { addData } from '../../components/context/ContextProvider';
import Spinner from 'react-bootstrap/Spinner';
const Register = () => {

    const [inputdata, setInputData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        gender: "",
        location: ""
    });

    const [status, setStatus] = useState("Active");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [showspin, setShowSpin] = useState(true);

    const navigate = useNavigate();

    const { useradd, setUseradd } = useContext(addData);

    // status optios
    const options = [
        { value: 'Active', label: 'Active' },
        { value: 'InActive', label: 'InActive' },
    ];

    // setInput Value
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value })
    }

    // status set
    const setStatusValue = (e) => {
        setStatus(e.value)
    }

    // profile set
    const setProfile = (e) => {
        setImage(e.target.files[0])
    }

    //submit userdata
    const submitUserData = async (e) => {
        e.preventDefault();

        const { fname, lname, email, mobile, gender, location } = inputdata;

        if (fname === "") {
            toast.error("First name is Required !")
        } else if (lname === "") {
            toast.error("Last name is Required !")
        } else if (email === "") {
            toast.error("Email is Required !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else if (mobile === "") {
            toast.error("Mobile is Required !")
        } else if (mobile.length > 10) {
            toast.error("Enter Valid Mobile!f")
        } else if (gender === "") {
            toast.error("Gender is Required !")
        } else if (status === "") {
            toast.error("Status is Required !")
        } else if (image === "") {
            toast.error("Prfile is Required !")
        } else if (location === "") {
            toast.error("location is Required !")
        } else {
            console.log(image);

            const data = new FormData();
            data.append("fname", fname)
            data.append("lname", lname)
            data.append("email", email)
            data.append("mobile", mobile)
            data.append("gender", gender)
            data.append("status", status)
            data.append("user_profile", image)
            data.append("location", location)

            const config = {
                "Content-Type": "multipart/form-data"
            }

            const response = await registerfunc(data, config);

            if (response.status === 200) {
                setInputData({
                    ...inputdata,
                    fname: "",
                    lname: "",
                    email: "",
                    mobile: "",
                    gender: "",
                    location: ""
                });
                setStatus("");
                setImage("");
                setUseradd(response.data)
                navigate("/");
            } else {
                toast.error("Error!")
            }

        }

    }

    useEffect(() => {
        if (image) {
            setPreview(URL.createObjectURL(image))
        }

        setTimeout(() => {
            setShowSpin(false)
        }, 1200)
    }, [image])


    return (
        <>
            {
                showspin ? <Spinner /> : <div className="container">
                    <h2 className='text-center mt-1'>Register Your Details</h2>
                    <Card className='shadow mt-3 p-3'>
                        <div className="profile_div text-center">
                            <img src={preview ? preview : "/man.png"} alt="img" />
                        </div>

                        <form>
                            <div className='border'>
                                <div className="">
                                    <label>First name</label>
                                    <input type="text" name='fname' value={inputdata.fname} onChange={setInputValue} placeholder='Enter FirstName' />
                                </div>
                                <div className="">
                                    <label>Last Name</label>
                                    <input type="text" name='lname' value={inputdata.lname} onChange={setInputValue} placeholder='Enter LastName' />
                                </div>
                                <div className="">
                                    <label>Email address</label>
                                    <input type="email" name='email' value={inputdata.email} onChange={setInputValue} placeholder='Enter Email' />
                                </div>
                                <div className="">
                                    <label>Mobile</label>
                                    <input type="text" name='mobile' value={inputdata.mobile} onChange={setInputValue} placeholder='Enter Mobile' />
                                </div>
                                <div className="">
                                    <label>Select Your Gender</label>
                                    <div>
                                        <label>
                                            <input
                                                type={"radio"}
                                                label={`Male`}
                                                name="gender"
                                                value={"Male"}
                                                onChange={setInputValue}
                                            />
                                            <span>Male</span>
                                        </label>
                                        <label>
                                            <input
                                                type={"radio"}
                                                label={`Female`}
                                                name="gender"
                                                value={"Female"}
                                                onChange={setInputValue}
                                            />
                                            <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                    <label>Select Your Status</label>
                                    <Select options={options} onChange={setStatusValue} />
                                </div>
                                <div className="">
                                    <label>Select Your Profile</label>
                                    <input type="file" name='user_profile' onChange={setProfile} placeholder='Select Your Profile' />
                                </div>
                                <div className="">
                                    <label>Enter Your Location</label>
                                    <input type="text" name='location' value={inputdata.location} onChange={setInputValue} placeholder='Enter Your Location' />
                                </div>
                            </div>
                            <button type="submit" onClick={submitUserData}>
                                Submit
                            </button>


                        </form>
                    </Card>
                    <ToastContainer position="top-center" />
                </div>
            }

        </>
    )
}

export default Register