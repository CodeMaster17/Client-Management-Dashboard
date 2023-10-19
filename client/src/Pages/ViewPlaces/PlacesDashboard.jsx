import React, { useEffect, useState } from 'react'
import "./PlacesDashboard.css"
// import Table from 'react-bootstrap/Table';
// import { Dropdown, Spinner } from 'react-bootstrap';
import { allTouristPlaceFunc } from '../../services/ApiTouristPlace';
import ButtonComponent from '../../Utils/Button/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';



const ViewPlaces = () => {

  const [allPlacedata, setAllPlacedata] = useState([])

  const getAllPlaceData = async () => {
    const response = await allTouristPlaceFunc()
    if (response.status === 200) {
      setAllPlacedata(response.data)
    }
    else {
      console.log("error for get all place data")
    }
  }
  useEffect(() => {
    getAllPlaceData()
  }, [])

  const navigate = useNavigate();
  const addPlaceButton = () => {
    navigate('/addplace')
  }

  return (

    <div className='viewPlacesContainer'>
      <div className='viewPlaceHeader'>
        <h1>Places</h1>
        <ButtonComponent text={"Add Place"} onClickFunction={addPlaceButton} />
      </div>
      <table className='viewPlacesTable'>
        <thead className='viewPlacesTableHead'>
          <tr id="tableHeadingrow" className='tableHeadingRow'>
            <th >#</th>
            <th>Place Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Rating</th>
            <th>Original Price (&#8377;) </th>
            <th>Discounted Price (&#8377;) </th>
            <th>Link </th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {allPlacedata.length === 0 ? <div className='spinnerContainer'> <Spinner /></div> : allPlacedata.map((item, index) => {
            return (
              <>
                {/* 
                <tr key={index} className={index % 2 === 0 ? 'bgLightBlue tableDataRow' : 'bgWhite tableDataRow'} >
                  <td>{index + 1}</td>
                  <td>{item.placeName}</td>
                  <td>{item.country}</td>
                  <td>{item.city}</td>
                  <td>{item.rating}</td>
                  <td>&#8377;  {item.originalPrice}</td>
                  <td>&#8377;  {item.discountPrice}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item >
                          <NavLink to={`/placedetails/${item._id}`} className="text-decoration-none">
                            <i className="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item >
                          <NavLink to={`/placeedit/${item._id}`} className="text-decoration-none">
                            <i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item >
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                */}
              </>
            )
          })}
        </tbody>
      </table >
    </div>
  )
}

export default ViewPlaces