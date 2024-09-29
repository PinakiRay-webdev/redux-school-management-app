import React from "react";
import { useNavigate } from "react-router-dom";
const StudentHome = () => {

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className="w-full h-fit">
      <div className="px-5">
        <p>This is the student home</p>
        <button onClick={logout} >Logout</button>
      </div>
    </div>
  );
};

export default StudentHome;
