import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllCoursesAPI } from '../services/allAPI';
import { Base_Url } from '../services/baseUrl';
import Header from './Header';
import { Button } from 'react-bootstrap';

function ViewCourses() {
    const [courseData, setCourseData] = useState([]);
    const params = useParams();
    console.log(params.id);
    const course = courseData.find(item => item._id === params.id);
    console.log(course)

    const getallCourses = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
            const result = await getAllCoursesAPI(reqHeader);
            setCourseData(result.data);
        }
    };
    ;


    useEffect(() => {
        getallCourses();
    }, []);


    return (
        <>
            <Header />
            <div
                style={{
                    backgroundColor: "#1eb2a6",
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div className="container">
                    <h1 className='fw-bolder text-center text-white' style={{ fontSize: "50px" }}>COURSE DETAILS</h1>
                    <div className="row mt-4">

                        <div className="col-md-6">
                            {course && course.coursevideo &&
                                <video controls className="video-fluid" style={{ width: '100%', maxHeight: '320px' }}>
                                    <source src={`${Base_Url}/uploads/${course.coursevideo}`} type="video/mp4" />
                                </video>
                            }
                        </div>
                        <div className="col-md-6">
                            {course &&
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder"><b>Course Title</b></h5>
                                        <p className="card-text fw-bold">{course.coursename}</p>
                                        <h5 className="card-title fw-bolder"><b>Description</b></h5>
                                        <p className="card-text fw-bold">{course.description}</p>
                                        <h5 className="card-title fw-bolder"><b>Category</b></h5>
                                        <p className="card-text fw-bold">{course.category}</p>
                                        <h5 className="card-title fw-bolder"><b></b></h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 text-center mt-3">
                         <Link to={`/enrollnow/${course?._id}`} ><Button  style={{ backgroundColor:"", width: "50%" }}>Enroll Now</Button></Link>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewCourses;
