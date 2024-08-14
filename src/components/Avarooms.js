import React, { useEffect, useState } from "react";

const Avarooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // Fetch rooms data from the server
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "https://room-allot-back.vercel.app/api/countRooms"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error.message);
      }
    };

    fetchRooms();
  }, []);
  return (
    <div id="availableZone" className="mt-5">
      <h1>Available Rooms</h1>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {rooms.map((room) => (
            <div
              className="col-lg-2 col-6"
              key={room.num}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
              }}
            >
              Room {room.num} - Vacancy: {room.sizeDifference}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avarooms;
