import React from 'react'
import { Link } from 'react-router-dom'
import AddCategory from '../components/AddCategory'
import Header from '../components/Header'

function Admin() {
    return (
        <>
            <Header admin />
            <div style={{
                backgroundColor: "#1eb2a6",
                backgroundSize: 'cover',
                minHeight: '88vh'
            }}>
                <div className='d-flex'>
                    <div className='d-flex flex-column' style={{ width: '300px', height: '90vh' }}>
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
                    <div className='p-3 w-100'>

                        <AddCategory />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin