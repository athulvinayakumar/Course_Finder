import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
import { deleteEnrolledAPI, enrollUserAPI } from '../services/allAPI';

function EnrolledUsers() {
    const [userDetail, setUserDetails] = useState([]);
    const params = useParams()
    console.log(params.id);
    const id = params.id

    const getEnrollUser = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
        const result = await enrollUserAPI(id, reqHeader);
        console.log(result.data)
        setUserDetails(result.data)
    }

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteEnrolledAPI(id, reqHeader)
        if (result.status === 200) {
            getEnrollUser()
        }
        else {
            alert(result.response.data)
        }
    }

    useEffect(() => {
        getEnrollUser()
    }, [])

    return (
        <>
            <Header />
            <div style={{
                backgroundColor: "#1eb2a6",
                backgroundSize: 'cover',
                minHeight: '90vh'
            }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='p-3 w-100'>
                                <h3 className='text-white text-center fw-bolder' style={{ fontSize: "60px" }}>Enrolled User</h3>
                                <div className='w-100 d-flex justify-content-center align-items-center mt-3'>
                                    <table className='table table-striped table-bordered shadow rounded'>
                                        <thead className='bg-primary text-white'>
                                            <tr>
                                                <th className="py-3 text-center">S.No</th>
                                                <th className="py-3 text-center">User Name</th>
                                                <th className="py-3 text-center">Email</th>
                                                <th className="py-3 text-center">Date</th>
                                                <th className="py-3 text-center">Number</th>
                                                <th className="py-3 text-center">Message</th>
                                                <th className="py-3 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userDetail.length > 0 ?
                                                userDetail.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td className='text-center'>{item.name}</td>
                                                        <td className='text-center'>{item.email}</td>
                                                        <td className='text-center'>{item.date}</td>
                                                        <td className='text-center'>{item.number}</td>
                                                        <td className='text-center'>{item.message}</td>
                                                        <div className='text-center'>
                                                            <button onClick={() => handleDelete(item._id)} className="btn btn-danger">
                                                                <i className="fas fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td colSpan="7" className="text-center">
                                                        <p className='text-danger'>Nothing to display</p>
                                                    </td>
                                                </tr>
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EnrolledUsers