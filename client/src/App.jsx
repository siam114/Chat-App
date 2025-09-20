import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/AuthContext';
import Loader from './components/Loader';

const App = () => {
  const {authUser, loading} = useContext(AuthContext)
  return (
    <div className="bg-[url('/bgImage.svg')] bg-contain ">
      <Toaster/>
      <Routes>
        <Route path='/' element={loading ? <Loader/> : authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path='/login' element={!authUser ?<LoginPage/> : <Navigate to="/"/>}/>
        <Route path='/profile' element={authUser ? <ProfilePage/> : <Navigate to="/login"/>}/>
      </Routes>
    </div>
  )
}

export default App
