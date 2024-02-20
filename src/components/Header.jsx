import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthTokenContext } from '../context/ContextShare'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function Header({ user }) {

  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const navigate = useNavigate()
  const play = useSelector((state) => state.playlistReducer)
  const handleLogout = () => {
    //remove existing user details from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthToken(false)
    // api
    //navigate to home
    navigate('/')

  }
  return (
    <div>
      <nav className="navbar py-2">
        <div className="container-fluid">
          <h1 className="fw-bolder" style={{ color: "#1eb2a6" }}>SKILL-TECH</h1>
          <div className='ms-auto'>
            {user &&
           
                <Link to="/playlist" style={{ textDecoration: 'none' }}><button className="btn btn-primary mt-1">Playlist<Badge bg="dark" className='rounded ms-1'>{play.length}</Badge> </button></Link>
             
            }
            <button onClick={handleLogout} className="btn btn  ms-2 text-white" style={{ backgroundColor: "red" }}>
              Logout <i className="fa-solid fa-power-off ms-2"></i>
            </button>
          </div>
        </div>
      </nav>

    </div>



  )
}

export default Header