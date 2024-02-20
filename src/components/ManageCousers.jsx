import React, { useEffect, useState } from 'react'
import { getAllCoursers } from '../services/allAPI'
import Header from './Header'
import { Link } from 'react-router-dom'

function ManageCousers() {
    const [users, setUsers] = useState([])


    const getalluser = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllCoursers(reqHeader)
            setUsers(result.data);
        }
    }
    useEffect(() => {
        getalluser()
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
                        <div className="col-md-3 col-lg-2 d-flex flex-column">
                            <Link className="mt-5 ms-3" style={{ textDecoration: 'none', color: 'white' }} to={'/admin'}>
                                <h5><i className="fa-solid fa-bars me-2"></i>Add Category</h5>
                            </Link>
                            <Link className="mt-3 ms-3" style={{ textDecoration: 'none', color: 'white' }} to={'/manageusers'}>
                                <h5><i className="fa-solid fa-user me-2"></i>Users List</h5>
                            </Link>
                            <Link className="mt-3 ms-3" style={{ textDecoration: 'none', color: 'white' }} to={'/managecourser'}>
                                <h5><i className="fa-solid fa-user me-2"></i>Cousers list</h5>
                            </Link>
                        </div>
                        <div className="col-md-9">
                            <div className='p-3 w-100'>
                                <h3 className='text-white' style={{fontSize:'50px'}}>Cousers List</h3>
                                <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
                                    <table className='table table-striped table-bordered shadow rounded'>
                                        <thead className='bg-primary text-white'>
                                            <tr>
                                                <th className="py-3 text-center">S.No</th>
                                                <th className="py-3 text-center">UserName</th>
                                                <th className="py-3 text-center">Email</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.length > 0 ? (
                                                users.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td className='text-center'>{item.username}</td>
                                                        <td className='text-center'>{item.email}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="text-center">
                                                        <p className='text-danger'>Nothing to display</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}

            export default ManageCousers