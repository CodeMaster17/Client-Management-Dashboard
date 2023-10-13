import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Select from 'react-select';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./AddPlace.css";
import Spinner from 'react-bootstrap/Spinner';
import ButtonComponent from '../../utils/Button/Button';
import { addTouristPlaceFunc } from '../../services/ApiTouristPlace';

const AddProduct = () => {
    const [inputdata, setInputData] = useState({
        placeName: "",
        country: "",
        city: "",
        rating: "",
        review: "",
        originalPrice: "",
        discountPrice: "",
        description: "",
        activities: "",
    });

    const [coverImage, setCoverImage] = useState(null);
    const [thumbnailImage, setThumbnailImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showspin, setShowSpin] = useState(false);

    const navigate = useNavigate();

    // setInput Value
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value });
    }

    // set cover Image
    const setCoverImageFunction = (e) => {
        setCoverImage(e.target.files[0]);
    }

    const setThumbnailImageFunction = (e) => {
        setThumbnailImage(e.target.files[0]);
    }

    // submit userdata
    const submitTouristPlaceData = async (e) => {
        e.preventDefault();

        const { placeName, country, city, rating, review, originalPrice, discountPrice, activities, description } = inputdata;


        console.log(inputdata);

        if (!placeName || !country || !city || !rating || !review || !originalPrice || !discountPrice || !activities || !description) {
            toast.error("All fields are required - from frontend!");
            return;
        }

        const data = new FormData();
        data.append("placeName", placeName);
        data.append("country", country);
        data.append("city", city);
        data.append("rating", rating);
        data.append("review", review);
        data.append("originalPrice", originalPrice);
        data.append("discountPrice", discountPrice);
        data.append("activities", activities);
        data.append("description", description);
        // if (coverImage) data.append("coverImage", coverImage);
        // if (thumbnailImage) data.append("thumbnailImage", thumbnailImage);

        const config = {
            "Content-Type": "application/json"
        }

        const response = await addTouristPlaceFunc(data, config);

        if (response.status === 200) {
            setInputData({
                placeName: "",
                country: "",
                city: "",
                rating: "",
                review: "",
                originalPrice: "",
                discountPrice: "",
                activities: "",
                description: ""
            });
            setCoverImage(null);
            setThumbnailImage(null);
            navigate("/");
        } else {
            toast.error("Error!");
        }
    }

    useEffect(() => {
        if (coverImage) {
            setPreview(URL.createObjectURL(coverImage));
        }
        if (thumbnailImage) {
            setPreview(URL.createObjectURL(thumbnailImage));
        }

        setTimeout(() => {
            setShowSpin(false);
        }, 1200);
    }, [thumbnailImage, coverImage]);

    return (
        <>
            {
                showspin ? <Spinner animation="border" /> : (
                    <div className="container">
                        <h2 className='text-center mt-4'>Add Tourist Place</h2>
                        <Card className='shadow mt-2 p-5 m-5'>
                            <div className="profile_div text-center">
                                <img src={preview ? preview : "/man.png"} alt="img" />
                            </div>

                            <form>
                                <div className='form_div'>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Name</label>
                                        <input className='input' type="text" name='placeName' value={inputdata.placeName} onChange={setInputValue} placeholder='Enter Name' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Country</label>
                                        <input className='input' type="text" name='country' value={inputdata.country} onChange={setInputValue} placeholder='Enter Country' />
                                    </div>
                                </div>
                                <div className='form_div'>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>City</label>
                                        <input className='input' type="text" name='city' value={inputdata.city} onChange={setInputValue} placeholder='Enter City' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Rating</label>
                                        <input className='input' type="number" name='rating' value={inputdata.rating} onChange={setInputValue} placeholder='Enter Rating' />
                                    </div>
                                </div>
                                <div className='form_div'>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Review</label>
                                        <input className='input' type="text" name='review' value={inputdata.review} onChange={setInputValue} placeholder='Enter Review' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Original Price</label>
                                        <input className='input' type="number" name='originalPrice' value={inputdata.originalPrice} onChange={setInputValue} placeholder='Enter Original Price' />
                                    </div>
                                </div>
                                <div className='form_div'>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Discounted Price</label>
                                        <input className='input' type="number" name='discountPrice' value={inputdata.discountPrice} onChange={setInputValue} placeholder='Enter Discounted Price' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Description</label>
                                        <input className='input' type="text" name='description' value={inputdata.description} onChange={setInputValue} placeholder='Enter Description' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Activities</label>
                                        <input className='input' type="text" name='activities' value={inputdata.activities} onChange={setInputValue} placeholder='Enter Activities' />
                                    </div>
                                    <div className='detail_fillup'>
                                        <label className='form_label'>Select Thumbnail</label>
                                        <input className='input_profile' type="file" name='thumbnailImage' onChange={setThumbnailImageFunction} />
                                        <label className='form_label'>Select Cover Image</label>
                                        <input className='input_profile' type="file" name='coverImage' onChange={setCoverImageFunction} />
                                    </div>
                                </div>
                                <div className='submit'>
                                    <ButtonComponent text="Submit" variant="blue" onClickFunction={submitTouristPlaceData} />
                                </div>
                            </form>
                        </Card>
                        <ToastContainer position="top-center" />
                    </div>
                )
            }
        </>
    );
}

export default AddProduct;
