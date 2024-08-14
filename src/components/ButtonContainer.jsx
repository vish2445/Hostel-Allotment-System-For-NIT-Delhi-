import React from 'react'
import Update from '../images/transfer.png'
import Rec from '../images/phone.png'
import Checked from '../images/checked.png'

const divStyle = {
  marginTop: '5px',
  fontWeight: 'bold',
  fontSize: '17px'
};
const buttonStyle = {
  
  padding: '10px 15px'
};
export default function ButtonContainer() {
  return (

    <div className="container text-center">

      <div className="row">
        <div className="col-lg-4 col-12 mt-lg-5 mt-2 ">
          <a href="#updateZone">
          <button style={buttonStyle} className="btn btn-md border border-1 border-black">
            <img src={Update} alt='icon' className="img-fluid" style={{ maxWidth: '80px', marginRight: '5px' }} />
            <div style={divStyle}>Update Room</div>
          </button>
          </a>
        </div>
        <div className="col-lg-4 col-12 mt-lg-5 mt-2 ">
          <a href="#referZone">
          <button style={buttonStyle} className="btn btn-md border border-1 border-black ">
            <img src={Rec} alt='icon' className="img-fluid" style={{ maxWidth: '80px', marginRight: '5px' }} />
            <div style={divStyle}>Recommend Room</div>
          </button>
          </a>
        </div>
        <div className="col-lg-4 col-12 mt-lg-5 mt-2 ">
          <a href="#availableZone">
          <button style={buttonStyle} className="btn btn-md border border-1 border-black ">
            <img src={Checked} alt='icon' className="img-fluid" style={{ maxWidth: '80px', marginRight: '5px' }} />
            <div style={divStyle}>Available Rooms</div>
          </button>
          </a>
        </div>
      </div>
    </div>

  )
}
