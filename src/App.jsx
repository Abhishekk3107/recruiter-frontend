import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import UpdateProfile from './pages/UpdateProfile';
import { useEffect } from 'react';
import Landing from './pages/Landing';

function App() {
  const role = localStorage.getItem("role");

  useEffect(()=>{
      console.log(localStorage.getItem('role'));
    },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/employee" element={<EmployeeDashboard/>}/>
        <Route path="/dashboard/user" element={<UserDashboard/>}/>
        {/* <Route path="/dashboard/user" element={role === "user" ? <UserDashboard /> : <Navigate to="/" />} /> */}
        {/* <Route path="/dashboard/employee" element={role === "employee" ? <EmployeeDashboard /> : <Navigate to="/" />} /> */}
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
