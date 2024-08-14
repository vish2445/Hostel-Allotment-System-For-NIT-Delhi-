import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://room-allot-back.vercel.app/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: credentials.password,
        email: credentials.email,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="border border-3 p-3 border-danger rounded-3"
      >
        <div className="form-group my-2">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={credentials.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group my-2 ">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mx-3">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
