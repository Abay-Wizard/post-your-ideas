import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import DeletePost from './pages/DeletePost';
import ShowPost from './pages/ShowPost';
import UpdatePost from './pages/UpdatePost';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/update/:id' element={<UpdatePost />} />
            <Route path='/delete/:id' element={<DeletePost />} />
            <Route path='/show' element={<ShowPost />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;