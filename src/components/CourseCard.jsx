import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';
import { Base_Url } from '../services/baseUrl';
import { useDispatch, useSelector } from 'react-redux';
import { addToPlaylist } from '../redux/slices/playlistSlice';

function CourseCard({ item }) {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlistReducer);

    const [showAlert, setShowAlert] = useState(false);

    const handleAddToPlaylist = (item) => {
        const alreadyAdded = playlist.find((playlistItem) => playlistItem._id === item._id);
        console.log("Item:", item);
        console.log("Already added:", alreadyAdded);

        if (!alreadyAdded) {
            dispatch(addToPlaylist(item));
        } else {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }



    return (
        <div className="course shadow team-member">
            <img
                style={{ height: '300px', width: '415px', transition: 'transform 0.3s' }}
                src={item ? `${Base_Url}/uploads/${item.courseimage}` : null}
                className="card-img-top"
                alt="Course Thumbnail"
            />
            <div className="member-details">
                <h3>{item ? item.coursename : null}</h3>
               
                <p class="fs-5 fw-bold">Posted By :{item ? item.user.user[0].username: null}</p>

                
              
                <div className="text-center mt-3">
                    <Link to={`/viewcourses/${item._id}`} className="btn btn-outline-success">View More</Link>
                    <button onClick={() => handleAddToPlaylist(item)} className="btn btn-primary ms-3">Add to Playlist</button>
                </div>
                {showAlert && <p className="text-danger fw-bolder mt-2">This course is already added to the playlist!</p>}
            </div>
        </div>


    );
}

export default CourseCard;
