import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Course from './pages/Course';
import Auth from './components/Auth';
import Admin from './pages/Admin';
import ViewCourse from './components/ViewCourse';
import Addcourses from './components/Addcourses';
import AddCategory from './components/AddCategory';
import User from './pages/User';
import LogReg from './components/LogReg';
import Courser from './pages/Courser';
import MangeUsers from './components/MangeUsers';
import ViewCourses from './components/ViewCourses';
import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';
import Playlist from './components/Playlist';
import ManageCousers from './components/ManageCousers';
import Footer from './components/Footer';
import EnrollNow from './components/EnrollNow';
import EnrolledUsers from './components/EnrolledUsers';

function App() {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)


    const token = sessionStorage.getItem("token");
    if (token) {
      setIsAuthToken(true);
    } else {
      setIsAuthToken(false);
    }

  return (
    <div >

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/course'} element={isAuthToken ?<Course />:<Home/>} />
        <Route path={'/user'} element={<User />} />
        <Route path={'/log'} element={<LogReg />} />
        <Route path={'/reg'} element={<LogReg register />} />
        <Route path={'/login'} element={<Auth />} />
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/admin'} element={isAuthToken ? <Admin /> : <Home />} />
        <Route path={'/manageusers'} element={isAuthToken ?<MangeUsers />:<Home/>} />
        <Route path={'/managecourser'} element={isAuthToken ?<ManageCousers />:<Home/>} />
        <Route path={'/courser'} element={isAuthToken ?<Courser />:<Home/>} />
        <Route path={'/addcourses'} element={isAuthToken ?<Addcourses />:<Home/>} />
        <Route path={'/addcategory'} element={isAuthToken ?<AddCategory />:<Home/>} />
        <Route path={'/viewcourse'} element={isAuthToken ?<ViewCourse />:<Home/>} />
        <Route path={'/viewcourses/:id'} element={isAuthToken ?<ViewCourses />:<Home/>} />
        <Route path={'/playlist'} element={isAuthToken ?<Playlist />:<Home/>} />
        <Route path={'/enrollnow/:id'} element={isAuthToken ?<EnrollNow />:<Home/>} />
        <Route path={'/enrolledusers/:id'} element={isAuthToken ?<EnrolledUsers />:<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
