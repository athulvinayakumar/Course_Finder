import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Base_Url } from '../services/baseUrl';
import { editCourseAPI, getCategoriesAPI } from '../services/allAPI';
import { editCoursContext } from '../context/ContextShare';
import Swal from 'sweetalert2';

function EditCourse({ edit }) {
    const { editCourseResponse, setEditCourseResponse } = useContext(editCoursContext);
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("");
    const [categories, setCategories] = useState([]);
    const [setVideo, setVideoPreview] = useState(""); // Fix: Typo in state declaration

    const handleShow = () => setShow(true);
    const handleClose = () => {
        handleClose1();
        setShow(false);
    };

    const handleClose1 = () => {
        setEditCourse({
            id: edit._id,
            coursename: edit.coursename,
            description: edit.description,
            category: edit.category,
            courseimage: "",
            coursevideo: ""
        });
        setPreview("");
    };

    const [editCourse, setEditCourse] = useState({
        id: edit._id,
        coursename: edit.coursename,
        description: edit.description,
        category: edit.category,
        courseimage: "",
        coursevideo: ""
    });

    useEffect(() => {
        if (editCourse.courseimage) {
            setPreview(URL.createObjectURL(editCourse.courseimage));
        }
    }, [editCourse.courseimage]);

    useEffect(() => {
        if (editCourse.coursevideo) {
            setVideoPreview(URL.createObjectURL(editCourse.coursevideo));
        }
    }, [editCourse.coursevideo]);

    useEffect(() => {
        Categories();
    }, []);

    const Categories = async () => {
        const response = await getCategoriesAPI();
        setCategories(response.data);
    };

    const handleUpdate = async () => {
        const { id, coursename, description, category, courseimage, coursevideo } = editCourse;
        if (!coursename || !description || !category) {
            alert('Please fill the form completely');
        } else {
            const reqBody = new FormData();
            reqBody.append("coursename", coursename);
            reqBody.append("description", description);
            reqBody.append("category", category);
            preview ? reqBody.append("courseimage", courseimage) : reqBody.append("courseimage", edit.courseimage);
            setVideo ? reqBody.append("coursevideo", coursevideo) : reqBody.append("coursevideo", edit.coursevideo);

            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            };

            if (preview) {
                reqHeader["Content-Type"] = "multipart/form-data";
            }

            const result = await editCourseAPI(id, reqBody, reqHeader);
            if (result.status === 200) {
                Swal.fire({
                    title: "Course Update Successfully",
                    icon: "success"
                });
                handleClose();
                setEditCourseResponse(result.data);
            }
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                <i className="fa-solid fa-pen-to-square"></i> Edit
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={e => setEditCourse({ ...editCourse, courseimage: e.target.files[0] })} />
                                <img style={{ height: '250px', width: '400px' }} className='img-fluid' src={preview ? preview : `${Base_Url}/uploads/${edit.courseimage}`} alt="no image" />
                            </label>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
                            <div className='mb-3 mt-2 w-100'>
                                <input type="text" className="form-control" placeholder='coursename' value={editCourse.coursename} onChange={(e) => setEditCourse({ ...editCourse, coursename: e.target.value })} />

                            </div>
                            <div className='mb-3 w-100'>
                                <textarea className="form-control" placeholder='description' rows="4" value={editCourse.description} onChange={(e) => setEditCourse({ ...editCourse, description: e.target.value })}></textarea>
                            </div>

                            <div>
                                <div className='mb-3 w-100'>

                                    <select
                                        className="form-control"
                                        value={editCourse.category}
                                        onChange={(e) => setEditCourse({ ...editCourse, category: e.target.value })}
                                    >
                                        {categories.length > 0 ?
                                            categories.map((item, index) => (
                                                <option key={index} value={item.category}>{item.category}</option>
                                            )) :
                                            <option disabled>No categories available</option>
                                        }
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">
                            <label>
                                <input type="file" onChange={e => setEditCourse({ ...editCourse, coursevideo: e.target.files[0] })} />
                                <video controls style={{ height: '250px', width: '350px' }}>
                                    <source src={setVideo ? setVideo : `${Base_Url}/uploads/${edit.coursevideo}`} type="video/mp4" />
                                </video>
                            </label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleUpdate}>update</Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default EditCourse;
