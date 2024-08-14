import React, { useState } from "react";
import "./Update.css";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const floorArray = [
    "Ground",
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
  ];
  const [floorValue, setfloorValue] = useState(0);
  const [roomValue, setroomValue] = useState(1);

  const handleClick = async () => {
    if (localStorage.getItem("authToken") === null) {
      alert("Please Login to continue.");
      navigate("/login");
    }
    await fetch("https://room-allot-back.vercel.app/api/selectRoom", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num: roomValue + floorValue,
        email: localStorage.getItem("userEmail"),
      }),
    });
  };
  return (
    <div id="updateZone" style={{ marginTop: "2%" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Floor
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  style={{ cursor: "pointer" }}
                >
                  {floorArray.map((e, i) => {
                    return (
                      <li
                        className="mx-2"
                        key={i}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setfloorValue(i * 100);
                        }}
                      >
                        {floorArray[i]} Floor
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-dark pb-5 ">
        <div className="container text-center ">
          <h1 className="display-4 fw-bold text-white mb-5">
            Please Select Desired Room
          </h1>
        </div>
        <div className="container text-center">
          <div className="row">
            {Array.from(Array(12), (e, i) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setroomValue(i + 1);
                  }}
                  className="col-lg-2 col-md-3 col-12 text-light"
                  key={i + 1}
                >
                  <h1
                    className="roomClass"
                    style={{
                      borderRadius: "5px",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "white",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    R{i + 1}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-white">
          <h2>Room: {roomValue + floorValue} </h2>
          <button
            className="btn btn-dark border border-3 px-5 py-2 border-light mt-3 "
            onClick={handleClick}
          >
            <h2>Update</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
