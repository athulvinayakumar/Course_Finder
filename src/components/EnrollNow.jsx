import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom';
import { enrollNowAPI } from '../services/allAPI';
import Swal from 'sweetalert2';

function EnrollNow() {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id);
    const [token, setToken] = useState("")
    const [enroll, setEnroll] = useState({
        name: "",
        email: "",
        date: "",
        number: "",
        message: "",
        courseid: params.id
    })

    const handleClear = () => {
        setEnroll({
            name: "",
            email: "",
            date: "",
            number: "",
            message: "",
        })
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, email, date, number, message } = enroll
        const courseid = params.id;
        if (!name || !email || !date || !number || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill the form completely!',
            });
        } else {
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("email", email)
            reqBody.append("date", date)
            reqBody.append("number", number)
            reqBody.append("message", message)
            reqBody.append("courseid", courseid)
            if (token) {
                const reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await enrollNowAPI(reqBody, reqHeader);
                console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    Swal.fire({
                        title: 'Success',
                        text: 'Course Enrolled Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                    handleClear()
                    navigate('/course')
                }
            }
        }
    }

    return (
        <>
            <Header />
            <div style={{ textAlign: 'center', backgroundColor: '#1eb2a6', padding: '60px', minHeight: "90vh" }}>
                <div
                    style={{
                        maxWidth: '500px',
                        margin: '0 auto',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                        padding: '20px',
                        backgroundColor: 'white',
                        marginTop: '40px'
                    }}
                >
                    <h2 style={{ marginBottom: '25px', fontWeight: 'bold', color: "black" }}>ENROLL HERE</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} type="text" placeholder="Enter Your Name" value={enroll.name} onChange={(e) => setEnroll({ ...enroll, name: e.target.value })} />
                        <input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} type="email" placeholder="Enter Your Email Address" value={enroll.email} onChange={(e) => setEnroll({ ...enroll, email: e.target.value })} />
                        <input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} type="date" value={enroll.date} onChange={(e) => setEnroll({ ...enroll, date: e.target.value })} />
                        <input style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} type="number" placeholder="Enter Your Mobile Number" value={enroll.number} onChange={(e) => setEnroll({ ...enroll, number: e.target.value })} />
                        <textarea style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} placeholder="Enter Your Message" rows="4" value={enroll.message} onChange={(e) => setEnroll({ ...enroll, message: e.target.value })} />
                        <button style={{ backgroundColor: '#218b7a', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', fontWeight: 'bold' }} onClick={handleSubmit}>ENROLL Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EnrollNow