import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {



    

    return (
        <>
            <div>
                <div style={{ padding: "2rem", background: "url('https://thrustfordng.com/wp-content/themes/thrustford/img/slide2.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
                    <div className="container">
                        <div className="row" style={{ marginTop: '50px' }}>
                            <div className="col-md-6 d-flex align-items-center justify-content-center"></div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <div style={{ marginTop: "12%" }}>
                                    <h4 className='fw-bolder' style={{ color: '#fff' }}>Welcome to Skill-Tech</h4>
                                    <h1 className='fw-bolder' style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', color: '#fff' }}>BEST ONLINE EDUCATION EXPERTISE</h1>
                                    <h2 className='mt-2' style={{ color: '#fff' }}>Learn From The Experts</h2>
                                    <h5 className='mt-2' style={{ color: '#fff' }}>Get started with finding your course in a few clicks.</h5>
                                    <Link to="/user" style={{ textDecoration: 'none' }}>
                                        <button className="btn mt-3" style={{ backgroundColor: '#1eb2a6', color: 'white' }}>Get Started 👋</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <h1 className='fw-bolder text-center' style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', color: "#1eb2a6" }}>LEARN ANYTHING</h1>
                    <div className="row mt-4">
                        <div className="col-md-6 d-flex flex-column mt-4">
                            <h1 className='fw-bolder'>Benefits About Online Learning Expertise</h1>
                            <div className="card learn shadow mt-3">
                                <div className="card-body">
                                    <h2 className="text-center fw-bold">Online Courses</h2>
                                    <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="card learn shadow mt-4">
                                <div className="card-body">
                                    <h2 className="text-center fw-bold">Earn A Certificates</h2>
                                    <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div className="card learn shadow mt-3">
                                <div className="card-body">
                                    <h2 className="text-center fw-bold">Learn with Expert</h2>
                                    <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://qatraininghub.com/wp-content/uploads/2023/09/Home-student-support.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>


                <div className="container mt-5">
                    <h1 className='fw-bolder text-center' style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', color: "#1eb2a6" }}>OUR CLIENTS</h1>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <img style={{ width: "100%", height: "300px" }}  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="card-body">
                                    <h1 className='fw-bolder text-center' style={{ color: "#1eb2a6" }}>Rini Mathew</h1>
                                    <h5 className='fw-bolder text-center'>Aff.Proffesor</h5>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <img style={{ width: "100%", height: "300px" }}  src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                <div className="card-body">
                                    <h1 className='fw-bolder text-center' style={{ color: "#1eb2a6" }}>Ranbir Kapoor</h1>
                                    <h5 className='fw-bolder text-center'>Aso.Proffesor</h5>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow mb-4">
                                <img style={{ width: "100%", height: "300px" }}  src="https://images.pexels.com/photos/3807735/pexels-photo-3807735.jpeg?auto=compress&cs=tinysrgb&w=600  " alt="" />
                                <div className="card-body">
                                    <h1 className='fw-bolder text-center' style={{ color: "#1eb2a6" }}>Rose Marry</h1>
                                    <h5 className='fw-bolder text-center'>Aff.Proffesor</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </>
    )
}

export default Home
