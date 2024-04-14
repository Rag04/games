import React from "react";
import { useNavigate } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  let user = localStorage.getItem('user')
  user = user ? JSON.parse(user) : null

  const handleLogout = ()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
  <nav className="flex justify-between items-center w-[80%] bg-purple-950 h-16 w-auto mx-auto px-9 drop-shadow-[0px_4px_0px_rgba(0,0,0,0.2)]"> 
      <div className="font-body3 text-white">
        <ul className="flex justify-center items-center gap-[2vw] px-60">
          <li>
          <Link className={`nav-link ${location.pathname === "/lists" ? "active" : ""}`} to="/">EXPLORE</Link> 
          </li>
          <li>
          <Link className={`nav-link ${location.pathname === "/lists" ? "active" : ""}`} to="/lists">LISTS</Link>
          </li>
          <li>
          <Link className={`mx-2 nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">ABOUT</Link>
          </li>
        </ul>  
      </div>
      <div className="font-body3 text-white right-0">
      <button className={`mx-1 nav-link`} onClick={handleLogout}>LOGOUT</button>
    </div>  
    </nav>
  );
};

export default Navbar;