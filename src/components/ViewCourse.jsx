import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { deleteCourseAPI, getCourseAPI } from '../services/allAPI'
import { Base_Url } from '../services/baseUrl'
import EditCourse from './EditCourse'
import { editCoursContext } from '../context/ContextShare'
import Header from './Header'
import { Link } from 'react-router-dom'



function ViewCourse() {

    const { editCourseResponse, setEditCourseResponse } = useContext(editCoursContext)

    const [allCourse, setAllCourse] = useState([])

    const getCourses = async () => {

        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getCourseAPI(reqHeader)
            setAllCourse(result.data);
        }
    }
    console.log(allCourse);

    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteCourseAPI(id, reqHeader)
        if (result.status === 200) {
            getCourses()
        }
        else {
            alert(result.response.data)
        }
    }


    useEffect(() => {
        getCourses()
    }, [editCourseResponse])

    return (
        <>

            <Header />
            <div style={{
                backgroundColor: "#1eb2a6",
                backgroundSize: 'cover',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className="container mt-3">
                    <h1 className='text-center text-white'style={{fontSize:'50px'}}>View Courses</h1>
                    <div className="row mt-1">
                        {allCourse?.length > 0 ? (
                            allCourse.map((item, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                        <Card.Img
                                            style={{ height: '300px' }}
                                            variant="top"
                                            src={item.courseimage ? `${Base_Url}/uploads/${item.courseimage}` : null}
                                            alt="Course image"
                                        />
                                        <Card.Body>
                                            <Card.Title className="text-center fw-bolder fs-2">{item.coursename}</Card.Title>
                                            <Card.Text className="mb-3">
                                                <b>Description:</b> {item.description && item.description.length ? `${item.description.slice(0, 130)}...` : item.description}
                                            </Card.Text>
                                            <Card.Text>
                                                <b>Category:</b> {item.category}
                                            </Card.Text>
                                            <div className="d-flex justify-content-center mt-3">
                                                <EditCourse edit={item} />
                                                <Link to={`/enrolledusers/${item?._id}`} className='text-decoration-none' ><Button variant="success">
                                                     Enrolled
                                                </Button></Link>
                                                <Button variant="danger ms-2" onClick={() => handleDelete(item._id)}>
                                                    <i className="fas fa-trash-alt"></i> Delete
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>


                                </div>
                            ))
                        ) : (
                            <p className="text-danger fw-bolder mt-3 ms-2">Courses not uploaded yet!!!!!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCourse