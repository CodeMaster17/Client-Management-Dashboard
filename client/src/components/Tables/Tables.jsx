import React from 'react'
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
// import Table from 'react-bootstrap/Table';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Badge from 'react-bootstrap/Badge';
// import Paginations from '../pagination/Paginations';
// import Spinner from 'react-bootstrap/Spinner';
// import { ToastContainer, toast } from "react-toastify"
import { BASE_URL } from '../../services/helper';
import { NavLink } from 'react-router-dom';
import { statuschangefunc } from "../../services/Apis"
import "./table.css"
import ButtonComponent from '../../Utils/Button/Button';
const Tables = ({ userdata, deleteUser, userGet, handlePrevious, handleNext, page, pageCount, setPage }) => {

    const handleChange = async (id, status) => {
        const response = await statuschangefunc(id, status);

        if (response.status === 200) {
            userGet();
            // toast.success("Status Updated")
        } else {
            // toast.error("error ")
        }
    }

    return (
        <>
            <div className='viewPlacesContainer'>
                <div className='viewPlaceHeader'>
                    <h1>Members</h1>

                </div>
                <table className='viewPlacesTable' >
                    <thead className='viewPlacesTableHead'>
                        <tr id="tableHeadingrow" className='tableHeadingRow'>
                            <th id="tableId">ID</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>&nbsp;&nbsp;&nbsp;Status</th>
                            <th>Profile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        {
                            userdata.length > 0 ? userdata.map((element, index) => {
                                return (
                                    <>
                                        <tr key={index} className={index % 2 === 0 ? 'bgLightBlue tableDataRow' : 'bgWhite tableDataRow'} >
                                            <td className='tableContent'>{index + 1 + (page - 1) * 5}</td>
                                            <td className='tableContent'>{element.fname + " " + element.lname}</td>
                                            <td className='tableContent'>{element.email}</td>
                                            <td className='tableContent'>{element.gender == "Male" ? "M" : "F"}</td>
                                            <td className='d-flex align-items-center'>
                                                {/* <Dropdown className='text-center'>
                                                    <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                                        <Badge bg={element.status == "Active" ? "primary" : "danger"}>
                                                            {element.status} <i className="fa-solid fa-angle-down"></i>
                                                        </Badge>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => handleChange(element._id, "Active")}>Active</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleChange(element._id, "InActive")}>InActive</Dropdown.Item>
                                                    </Dropdown.Menu>
                                </Dropdown> */ }
                                            </td>
                                            <td className='img_parent'>
                                                <img src={`${BASE_URL}/uploads/${element.profile}`} alt="img" />
                                            </td>
                                            <td>
                                                {/* <Dropdown>
                                                    <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item >
                                                            <NavLink to={`/userprofile/${element._id}`} className="text-decoration-none">
                                                                <i className="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                                            </NavLink>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item >
                                                            <NavLink to={`/edit/${element._id}`} className="text-decoration-none">
                                                                <i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                                                            </NavLink>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item >
                                                            <div onClick={() => deleteUser(element._id)}>
                                                                <i className="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                                            </div>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                </Dropdown> */}
                                            </td>
                                        </tr>
                                    </>
                                )
                            }) : <div className='no_data text-center'>No Data Found</div>
                        }


                    </tbody>
                </table>
                { /* 
                <Paginations
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                />
            */  }

                {/* 
                <ToastContainer />
            */ }

            </div>
        </>
    )
}

export default Tables