import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { loginAPI, registerAPI } from '../services/allAPI';
import Swal from 'sweetalert2';
import { isAuthTokenContext } from '../context/ContextShare';


function Auth({ register }) {

  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)

  //  create a state 
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userData);

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()

    const { username, email, password } = userData

    if (!username || !email || !password) {
      Swal.fire("Please Fill the Form!");
    } else {
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status === 200) {

        Swal.fire({
          position: "top-end",
          title: "Registered Successful",
          icon: "success"
        });


        //  reset state
        setUserData({
          username: "", email: "", password: ""
        })

        // navigate to login page
        navigate('/login')
      }

      else {
        Swal.fire({
          title: result.response.data,
          icon: "error",
        });
      }
    }
  }

  // login
  const handleLogin = async (e) => {
    e.preventDefault()

    const { email, password } = userData

    if (!email || !password) {
      Swal.fire("Please Fill the Form!");
    }
    else {
      // api call 
      const res = await loginAPI(userData)
      console.log(res);
      if (res.status == 200) {
        // alert
        Swal.fire({
          position: "top-end",
          title: "Login Successful",
          icon: "success"
        });
        setIsAuthToken(true)
        // store
        sessionStorage.setItem("existingUser", JSON.stringify(res.data.existingUser))
        sessionStorage.setItem("token", res.data.token)
        //  reset state
        setUserData({
          username: "", email: "", password: ""
        })
        if (res.data.existingUser.email = "admin@gmail.com" && res.data.existingUser.password === 'Admin123') {

          navigate('/admin');
        } else {
          navigate('/course');
        }
      }
      else {
        Swal.fire({
          position: "top-end",
          title: "Login failed",
          icon: "error"
        });
      }
    }
  }

  const registerform = register ? true : false

  return (
    <>
      <div
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlfGVufDB8fDB8fHww')",
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container className='mt-5'>

          <div>
            <Row>
              <Col className="col-md-3"></Col>
              <Col className="col-md-6 d-flex justify-content-center align-items-center card shadow" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', padding: '20px' }}>
                <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                  {registerform ? (
                    <h1 className="text-center fw-bold mb-3" style={{ marginTop: '5%', fontFamily: 'Arial, sans-serif', color: '#1eb2a6' }}>REGISTER</h1>
                  ) : (
                    <h1 className="text-center fw-bold mb-3" style={{ marginTop: '5%', fontFamily: 'Arial, sans-serif', color: '#1eb2a6' }}>LOGIN</h1>
                  )}
                  <Form style={{ width: '70%' }}>
                    {registerform && (
                      <Form.Group className="mb-3 mt-2" controlId="formBasicUsername">
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          value={userData.username}
                          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                      </Form.Group>
                    )}
                    <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email Id"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      />
                    </Form.Group>
                    {registerform ? (
                      <div className="text-center">
                        <button
                          onClick={handleRegister}
                          className="btn text-white mt-2"
                          style={{ width: '100%', backgroundColor: "#1eb2a6" }}
                        >
                          Register
                        </button>
                        <p className="text-black mt-3">
                          Already have an account? Click here to
                          <Link
                            style={{ color: 'blue', textDecoration: 'none' }}
                            to={'/login'}
                          >
                            {' '}
                            Login
                          </Link>
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <button
                          onClick={handleLogin}
                          className="btn text-white mt-3"
                          style={{ width: '100%', backgroundColor: "#1eb2a6" }}
                        >
                          Login
                        </button>
                        <p className="text-black mt-3">
                          New User? Click here to{' '}
                          <Link
                            to={'/register'}
                            style={{ color: 'blue', textDecoration: 'none' }}
                          >
                            {' '}
                            Register
                          </Link>
                        </p>
                      </div>
                    )}
                  </Form>
                </div>
              </Col>
              <Col className="col-md-3"></Col>
            </Row>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Auth



