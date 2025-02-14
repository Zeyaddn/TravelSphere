import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

import sec from "/images/hero.webp"

const HeroSection = () => {
  const [destinationFrom, setDestinationFrom] = useState("Select Destination");
  const [destinationTo, setDestinationTo] = useState("Select Destination");
  const [selectedDate, setSelectedDate] = useState("");
  const [guests, setGuests] = useState("Number of Guests");

  return (
    <div className="container position-relative hero" style={{ height: "70vh", marginTop: "150px" }}>
      <div className="container h-100">
        <img
          src={sec}
          alt="Hero" loading="lazy"
          className="w-100 h-100 rounded-4 object-fit-cover "
        />
      </div>
      
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <button className="button">
          <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
      
      <div className="position-absolute start-50 w-75 translate-middle-x bg-white shadow-lg rounded-4 p-4 d-flex flex-wrap gap-3 align-items-center" style={{ bottom: "-40px" }}>
        
        <div className="col-12 col-md d-flex flex-column">
          <label className="text-secondary small">From :</label>
          <div className="input-group">
            <span className="input-group-text"><FaMapMarkerAlt color="#FA7436" /></span>
            <select className="form-select" value={destinationFrom} onChange={(e) => setDestinationFrom(e.target.value)}>
              <option value="Select Destination">Select Destination</option>
              <option value="Bali, Indonesia">Bali, Indonesia</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-md d-flex flex-column">
          <label className="text-secondary small">To :</label>
          <div className="input-group">
            <span className="input-group-text"><FaMapMarkerAlt color="#FA7436" /></span>
            <select className="form-select" value={destinationTo} onChange={(e) => setDestinationTo(e.target.value)}>
              <option value="Select Destination">Select Destination</option>
              <option value="Bali, Indonesia">Bali, Indonesia</option>
            </select>
          </div>
        </div>
        
        <div className="col-12 col-md d-flex flex-column">
          <label className="text-secondary small">Dates :</label>
          <div className="input-group">
            <span className="input-group-text"><FaCalendarAlt color="#FA7436" /></span>
            <input 
              type="date" 
              className="form-control" 
              value={selectedDate} 
              onChange={(e) => setSelectedDate(e.target.value)} 
            />
          </div>
        </div>
        
        <div className="col-12 col-md d-flex flex-column">
          <label className="text-secondary small">Guest :</label>
          <div className="input-group">
            <span className="input-group-text"><FaUser color="#FA7436" /></span>
            <select className="form-select" value={guests} onChange={(e) => setGuests(e.target.value)}>
              <option value="Number of Guests">Number of Guests</option>
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3+ Guests">3+ Guests</option>
            </select>
          </div>
        </div>
        
        <button className="btn text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: "#FA7436", width: "50px", height: "50px" }}>
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;