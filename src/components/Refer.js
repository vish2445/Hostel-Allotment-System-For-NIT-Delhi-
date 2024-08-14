import React, { useEffect, useState } from "react";
import ImageIcon from "../images/roommate.png";

const Refer = () => {
  const [refroom, setrefroom] = useState(0);
  const [credentials, setcredentials] = useState({
    email: "",
    room: "",
  });
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://room-allot-back.vercel.app/api/referRoom",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refroom: credentials.room,
          email: credentials.email,
        }),
      }
    );
    const json = response.json();
    console.log(json);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        const response = await fetch(
          `https://room-allot-back.vercel.app/api/refroom?email=${userEmail}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const json = await response.json();
          if (json.success) {
            setrefroom(json.ref);
          } else {
            console.error("Error in server response:", json.error);
          }
        } else {
          console.error("Network response was not ok:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="referZone">
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {refroom === 0 ? (
          <>No room was referred to you</>
        ) : (
          <>
            You are referred to <strong>Room {refroom}</strong>
          </>
        )}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <h1>Refer Roommates</h1>
      <div
        style={{
          alignItems: "left",
          justifyContent: "left",
          display: "flex",
          paddingLeft: "5%",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img src={ImageIcon} alt="" className="mr-3" />
            </div>
            <div
              className="col-lg-6 col-12 border border-3 border-danger rounded-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label h4 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={onChange}
                    value={credentials.email}
                    name="email"
                    className="form-control border border-1 border-info "
                    id="exampleInputEmail1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label h4">Room Number</label>
                  <input
                    type="text"
                    onChange={onChange}
                    value={credentials.room}
                    name="room"
                    className="form-control border border-1 border-info"
                    id="exampleInputRoomNumber1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
