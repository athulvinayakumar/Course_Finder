import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';
import { getAllCourseAPI, getCategoriesAPI, getCombine } from '../services/allAPI';
import Header from '../components/Header';

function Course() {


    const [searchKey, setSearchKey] = useState("")

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredCourse, setFilteredCourse] = useState([]);

    useEffect(() => {
        Categories()
        getallCourses()
    }, [searchKey]);


    const Categories = async () => {
        const response = await getCategoriesAPI();
        setCategories(response.data);
    };

    const [allCourse, setAllCourse] = useState([])

    const getallCourses = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllCourseAPI(searchKey, reqHeader)
            const courseUser = await Promise.all(result.data.map(async(course) => {
                const userResult = await getCombine(course.userId,reqHeader);
                return { ...course, user: userResult.data };
              }));
            setAllCourse(courseUser);
        }
    }
    console.log(allCourse);

    const filterCourses = () => {
        if (selectedCategory) {
            const filtered = allCourse.filter(course => course.category === selectedCategory);
            setFilteredCourse(filtered);
        } else {
            setFilteredCourse(allCourse);
        }
    }
    console.log(filteredCourse);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    }

    useEffect(() => {
        filterCourses();
    }, [selectedCategory]);


    return (
        <>
            <Header user />
            <div style={{
                backgroundColor: "#1eb2a6",
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}>
                <div className="container p-5">
                    <div className='d-flex justify-content-between'>
                        <h1 className='fw-bolder text-white'>All COURSES</h1>

                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="d-flex w-100">
                            <input onChange={(e) => setSearchKey(e.target.value)} className='form-control' type="text" placeholder='Search Title' />
                            <i style={{ marginLeft: '-40px', color: 'black' }} className="fa-solid fa-magnifying-glass fa-rotate-90"></i>
                        </div>
                    </div>

                    <div className="row mt-3">
                        {categories?.length > 0 &&
                            categories.map((category) => (
                                <div className="col-md-3">
                                    <button className={`btn btn-dark w-100 ${selectedCategory === category.category ? 'active' : ''}`} onClick={() => handleCategoryClick(category.category)}>{category.category}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='container'>
                    <Row >
                        {(selectedCategory && filteredCourse.length > 0) ?
                            filteredCourse.map((item) => (
                                <Col className="mb-5" xs={12} sm={6} lg={4} key={item.id}>
                                    <CourseCard item={item} />
                                </Col>
                            )) :
                            allCourse.map((item) => (
                                <Col className="mb-5" xs={12} sm={6} lg={4} key={item.id}>
                                    <CourseCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Course;
