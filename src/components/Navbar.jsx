import React from 'react'
import "./navbar.css"
import accounts from "../images/account.png"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  const home = "/";
  const sign = "/login"
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  return (
    <div>
      <nav className="freenav navbar navbar-expand-lg navbar-light bg-light bg-transparent">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand fw-bold text-white" to={home}>NITD Allots</Link>
          <form className="d-flex">
          {localStorage.getItem('authToken') === null ? (
            <Link className="btn fw-bold text-white" to="/login">
              Sign In
            </Link>
          ) : (
            <div>
              <img
                src={accounts}
                style={{ maxWidth: '30px', marginRight: '5px' }}
                alt="accounts"
              />
              <button onClick={handleLogout} className="btn fw-bold text-white">
                Log Out
              </button>
            </div>
          )}

          </form>
        </div>

      </nav>
    </div>
  )
}
