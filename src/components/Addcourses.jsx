import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { addCourseAPI, getCategoriesAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function Addcourses() {

    const [token, setToken] = useState("")
    const [categories, setCategories] = useState([]);
    const [addCourse, setAddCourse] = useState({
        coursename: "",
        description: "",
        category: "",
        courseimage: null,
        coursevideo: null
    })
    console.log(addCourse);

    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);

    const handleClose = () => {
        setAddCourse({
            coursename: "",
            description: "",
            category: "",
            courseimage: "",
            coursevideo: ""
        });

        if (imageInputRef.current) {
            imageInputRef.current.value = null;
        }
        if (videoInputRef.current) {
            videoInputRef.current.value = null;
        }

    };


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
        Categories()
    }, [])


    const Categories = async () => {
        const response = await getCategoriesAPI();
        setCategories(response.data);
    };

    const handleAdd = async (e) => {
        e.preventDefault()
        const { coursename, description, category, courseimage, coursevideo } = addCourse
        if (!coursename || !description || !category || !courseimage || !coursevideo) {
            toast.warning('Please Fill the form Completely')
        } else {
            const reqBody = new FormData()
            reqBody.append("coursename", coursename)
            reqBody.append("description", description)
            reqBody.append("category", category)
            reqBody.append("courseimage", courseimage)
            reqBody.append("coursevideo", coursevideo)

            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await addCourseAPI(reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    toast.success("Course added Succesfully")
                    handleClose()
                }
                else {
                    toast.error(result.response.data);
                }
            }


        }
    }

    return (
        <>
            <Header />
            <div style={{  backgroundColor: '#1eb2a6', padding: '20px' ,minHeight:"100vh"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                <Card.Body>
                                    <h2 className="text-center text-black mb-4" style={{ fontWeight: 'bold', color: '#218b7a' }}>Create Course</h2>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="courseName" className="form-label">Course Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="courseName"
                                                value={addCourse.coursename}
                                                onChange={(e) => setAddCourse({ ...addCourse, coursename: e.target.value })}
                                                placeholder="Enter a course name"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                value={addCourse.description}
                                                onChange={(e) => setAddCourse({ ...addCourse, description: e.target.value })}
                                                rows={5}
                                                placeholder="Write your Description here"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select
                                                className="form-select"
                                                id="category"
                                                value={addCourse.category}
                                                onChange={(e) => setAddCourse({ ...addCourse, category: e.target.value })}
                                            >
                                                <option value="">Select Category</option>
                                                {categories?.length > 0 &&
                                                    categories.map((category) => (
                                                        <option key={category._id} value={category.name}>
                                                            {category.category}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                onChange={(e) => setAddCourse({ ...addCourse, courseimage: e.target.files[0] })}
                                                accept="image/*"
                                                ref={imageInputRef}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="video" className="form-label">Video</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="video"
                                                onChange={(e) => setAddCourse({ ...addCourse, coursevideo: e.target.files[0] })}
                                                accept="video/*"
                                                ref={videoInputRef}
                                            />
                                        </div>

                                        <div className="d-flex justify-content-center mt-4">
                                            <button onClick={handleAdd} className="btn" style={{ backgroundColor: "#1eb2a6", color: "#fff", fontWeight: 'bold' }}>
                                                Add
                                            </button>
                                            <button onClick={handleClose} className="btn btn-secondary ms-md-2 mt-2 mt-md-0">
                                                Clear
                                            </button>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <ToastContainer position='top-center' theme='colored' autoClose={1000} />
                </div>

            </div>
        </>
    )
}

export default Addcourses