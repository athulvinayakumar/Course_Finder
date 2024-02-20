import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  removeFromPlaylist } from '../redux/slices/playlistSlice';
import { Base_Url } from '../services/baseUrl';
import Header from './Header';

function Playlist() {
    const playlist = useSelector((state) => state.playlistReducer);
    const dispatch = useDispatch();
   

    return (
        <>
        <Header/>
        <div style={{
               backgroundColor: "#1eb2a6",
               backgroundSize: 'cover',
               minHeight: '100vh',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
                
            }}>
            <div className="container mt-5">
                <h1 className='text-center fw-bolder text-white' style={{fontSize:"50px"}}>Playlist</h1>
                <Row>
                    {playlist?.length > 0 ? (
                        playlist.map((item) => (
                            <Col key={item.id} className="mb-5" xs={12} sm={6} lg={4}>
                                <div className="card course shadow">
                                    <img style={{ maxWidth: '100%', maxHeight: '200px' }} src={item ? `${Base_Url}/uploads/${item.courseimage}` : null} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="text-center fw-bolder fs-2"></h5>
                                        <p className="text-muted">{item.description}</p>
                                        <div className="text-center">
                                            <Link to={`/viewcourses/${item._id}`} className="btn btn-outline-success">View More</Link>
                                            <button onClick={() => dispatch(removeFromPlaylist(item._id))} className="btn btn-outline-danger ms-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>)
                        )
                    ) : (
                        <div style={{ height: '73vh' }} className='d-flex flex-column justify-content-center align-items-center text-danger'>
                            <img height="50%" src="https://media1.tenor.com/m/zS02vRH6AsMAAAAC/turn-down-volume-mute.gif" alt="" />
                            <h4 className='text-danger fw-bolder'> Your Playlist is empty!!!</h4>
                        </div>
                    )}
                </Row>
            </div>
            </div>
        </>
    )
}

export default Playlist;
