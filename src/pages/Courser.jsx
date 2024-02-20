import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Courser() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (sessionStorage.getItem("existingUser")) {
            setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username);
        }
    }, []);

    return (
        <>
            <Header Courser />
            <div style={{
                backgroundColor: "#1eb2a6",
                backgroundSize: 'cover',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className='container mt-2'>
                    <h1 className='fw-bolder text-center text-white'>Welcome <span className='text-black'>{username}</span></h1>
                    <div className="row mt-4">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card shadow p-2" style={{ width: "100%", borderRadius: '15px', overflow: 'hidden' }}>
                                        <img style={{ width: '100%', height: 'auto' }} src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif" alt="" />
                                        <div className='text-center mt-3'>
                                            <Link to={'/addcourses'} className='text-decoration-none'><button className='btn btn-success'>Add Category</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card shadow p-2" style={{ width: "100%", borderRadius: '15px', overflow: 'hidden' }}>
                                        <img style={{ width: '100%', height: 'auto' }} src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" />
                                        <div className='text-center mt-3'>
                                            <Link to={'/viewcourse'} className='text-decoration-none'><button className='btn btn-success'>View Courses</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courser;
