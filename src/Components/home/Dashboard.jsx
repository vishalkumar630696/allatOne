

import React from "react";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import {
  // FaFlask,
  // FaUsers,
  // FaProjectDiagram,
  // FaBoxes,
  FaFlask,
  FaVial,
  FaChartLine ,
} from "react-icons/fa";

import { Link, } from "react-router-dom";
import "../home/Navbar.css";

export default function Dashboard() {

  //  logged-in user id
  const userId = localStorage.getItem("userId");

  return (
    <>
      <nav className="navbar navbar-expand-lg modern-navbar">
        <div className="container-fluid">
          {/* LOGO */}
          <a
            className="navbar-brand brand-logo d-flex align-items-center"
            href="#"
          >
            <img
              src="assets/photos/aryan.jpeg"
              alt="Aryan Logo"
              className="logo-img"
            />
            <span className="ms-2">Aryan Group</span>
          </a>

          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            ☰
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* LEFT MENU */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links-modern">

              <li className="nav-item">
                <Link className="nav-link" to="/centrallab">
                  <FaFlask className="nav-icon" /> Labs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  <FaVial className="nav-icon" /> Research & Development
                </Link>
              </li>
           

            <li className="nav-item">
                <Link className="nav-link" to="/result">
                  <FaChartLine className="nav-icon" /> Result
                </Link>
              </li>
                 </ul>
            {/* RIGHT PROFILE */}
            <div className="profile-container">
              <div className="profile-box">
                <FaUserCircle className="profile-icon" />

                <div className="profile-text">
                  {/* NAME + EDIT BUTTON */}
                  {/* <div className="name-row">
                    <span className="username">JohnDoe</span>

                    <FaEdit
                      className="edit-icon"
                      title="Edit Profile"
                      onClick={() => navigate(/user/edit/${userId})}
                    />
                  </div> */}
                  <span className="username">JohnDoe</span>

                  <span className="role">Admin</span>
                </div>
              </div>

              {/* DROPDOWN */}
              <div className="dropdown-menu-modern">
                <FaEdit
                  className="dropdown-edit-icon"
                  title="Edit Profile"
                  // onClick={() => navigate(/user/edit/${userId})}
                />
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Username:</strong> johndoe
                </p>
                <p>
                  <strong>Email:</strong> john@email.com
                </p>
                <p>
                  <strong>Contact:</strong> 9876543210
                </p>
                <hr />
                <button className="logout-btn">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}