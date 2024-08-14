import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://room-allot-back.vercel.app/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        email: credentials.email,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      navigate("/login");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="border border-3 p-3 border-info rounded-3"
      >
        <div className="form-group my-2">
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={onChange}
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group my-2">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mx-3">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
