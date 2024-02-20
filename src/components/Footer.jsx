import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='mt-5' style={{ backgroundColor: "white", marginTop: "-1%" }}>
                <div className='container'>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 style={{ color: "#218b7a" }}> <b>Contact Us</b></h3>
                            <div>
                                <Link style={{ textDecoration: 'none', color: '#1e1e38' }}> <i className="fa-solid fa-phone me-3"></i>123-456-7890</Link>
                                <br />
                                <Link style={{ textDecoration: 'none', color: '#1e1e38' }}> <i className="fa-solid fa-envelope me-3"></i>Skilltech@gmail.com</Link>
                            </div>

                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h4 style={{ color: "#218b7a" }}> <b>Links</b></h4>
                            <Link style={{ textDecoration: 'none', color: '#1e1e38' }}>Home</Link>
                            <Link style={{ textDecoration: 'none', color: '#1e1e38' }}>Admin</Link>
                            <Link style={{ textDecoration: 'none', color: '#1e1e38' }}>Courser</Link>
                        </div>
                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 style={{ color: "#218b7a" }}> <b>Services</b></h3>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Learning</Link>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Study Material</Link>
                            <Link style={{ color: '#1e1e38', textDecoration: 'none' }}>Advanced Courses</Link>
                        </div>

                        <div className="col-lg-3 d-flex flex-column mt-5">
                            <h3 style={{ color: "#218b7a" }}> <b>SkillTech</b></h3>
                            <p>Skilltech offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p>
                        </div>
                        <div className='col-lg-12 col-sm-12 d-flex justify-content-center align-items-center icons mt-5'>
                            <Link to={'https://www.instagram.com/'} style={{ textDecoration: 'none', color: "#218b7a" }}><i className="fa-brands fa-instagram fa-2x me-4"></i></Link>
                            <Link to={'https://www.facebook.com/'} style={{ textDecoration: 'none', color: "#218b7a" }}><i className="fa-brands fa-facebook fa-2x me-4 "></i></Link>
                            <Link to={'https://www.linkedin.com/'} style={{ textDecoration: 'none', color: "#218b7a" }}><i className="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
                            <Link to={'https://twitter.com/'} style={{ textDecoration: 'none', color: "#218b7a" }}><i className="fa-brands fa-twitter fa-2x "></i></Link>
                        </div>
                        <div style={{ color: '#1e1e38' }} className='mt-2'>
                            <center><p>Copyright © 2023 <span style={{ color: "#1e1e38" }}>Skilltech</span>.Build With React.</p></center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer