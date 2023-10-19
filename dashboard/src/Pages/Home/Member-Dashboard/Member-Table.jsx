import React, { useEffect, useState } from 'react'
import { usergetfunc } from '../../../Services/user-api-call';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../Components/Shared/Button/Button';



const MemberTable = () => {

    const [userdata, setUserData] = useState([]);

    const [showspin, setShowSpin] = useState(true);
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("All");
    const [status, setStatus] = useState("All");
    const [sort, setSort] = useState("new");
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    // const { useradd, setUseradd } = useContext(addData);

    // const { update, setUpdate } = useContext(updateData);
    // const { deletedata, setDLtdata } = useContext(dltdata);

    const navigate = useNavigate();

    const adduser = () => {
        navigate("/register")
    }

    // get user
    const userGet = async () => {
        const response = await usergetfunc(search, gender, status, sort, page);
        if (response.status === 200) {

            console.log(response.data.usersdata)
            setUserData(response.data.usersdata);
            // setPageCount(response.data.Pagination.pageCount)
        } else {
            console.log("error for get user data")
        }
    }


    // user delete
    // const deleteUser = async (id) => {
    //     const response = await deletfunc(id);
    //     if (response.status === 200) {
    //         userGet();
    //         setDLtdata(response.data)
    //     } else {
    //         toast.error("error")
    //     }
    // }

    // export user
    // const exportuser = async () => {
    //     const response = await exporttocsvfunc();
    //     if (response.status === 200) {
    //         window.open(response.data.downloadUrl, "blank")
    //     } else {
    //         toast.error("error !")
    //     }
    // }

    // pagination
    // handle prev btn
    // const handlePrevious = () => {
    //     setPage(() => {
    //         if (page === 1) return page;
    //         return page - 1
    //     })
    // }

    // handle next btn
    // const handleNext = () => {
    //     setPage(() => {
    //         if (page === pageCount) return page;
    //         return page + 1
    //     })
    // }

    useEffect(() => {
        userGet();
    }, [search, gender, status, sort, page])


    return (
        <>
            <div className="-my-2 py-2 w-full shadow-cardsShadow  overflow-x-auto sm:-mx-6 lg:mx-0 sm:px-6 pr-10 lg:px-8">
                <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white px-12">
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>Member Dashboard</p>
                        <Button text={"Add User"} />
                    </div>
                    <div className="flex w-full justify-between mt-4">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div className="flex">
                                    <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <input type="text" className="flex-shrink flex-grow  leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-base text-gray-500 font-thin" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300  text-sm leading-4 text-blue-500 tracking-wider">Details</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {userdata.map((user, index) => {
                                    return (
                                        <>
                                            <tr key={user._id} >
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <div className="text-sm leading-5 text-gray-800">#{index + 1}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                                    <div className="text-sm leading-5 text-blue-900">{`${user.fname}` + " " + `${user.lname}`}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.email}</td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.mobile}</td>
                                                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative text-xs"> {user.status} </span>
                                                    </span>
                                                </td>

                                                <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                                    <Link to={`/profile/${user._id}`}>
                                                        <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">


                                                            View Details
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </>

                                    )
                                })}

                            </tbody>
                        </table></div>
                </div>
            </div>

        </>

    )
}

export default MemberTable