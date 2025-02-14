import { useEffect, useState } from "react";
import card1 from "/images/card1.webp";
import card3 from "/images/card3.webp";
import card4 from "/images/card4.webp";
import card5 from "/images/card5.webp";
import card6 from "/images/card6.webp";
import card7 from "/images/card7.webp";
import card8 from "/images/card8.webp";
import card9 from "/images/card9.webp"


export default function TouristDestinations() {
  const [destinations, setDestinations] = useState([]);
  const images = [card1,card3,card4,card5,card6,card7,card8,card9];

  useEffect(() => {
    fetch("https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/tour-destinations")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((dest, index) => ({
          ...dest,
          image: images[index % images.length],
        }));
        setDestinations(updatedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container card-section py-5 mt-5">
      <h1 className="text-center mb-4">
       <span>The <span className="text-card-section">best place</span> for vacation</span>  
      </h1>
      <div className="d-flex justify-content-center mb-4 mt-3">
        <span className=" border-bottom border-warning pb-1 me-3" style={{color:"#fA7436"}}>Special Deals</span>
        <span className="text-muted me-3">Populer</span>
        <span className="text-muted me-3">Recommendation</span>
        <span className="text-muted">Best Price</span>
      </div>
      <div className="row g-4 " style={{marginTop:"100px"}}>
        {destinations.slice(0, 8).map((dest) => (
          <div key={dest.id} className="col-md-3">
            <div className="card shadow-sm">
              <img src={dest.image} loading="lazy" alt={dest.name} className="card-img-top img-cards" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                <span className="card-title" style={{color:"#fA7436" , fontSize:"18px"}}>
                    <i className='bx bx-map'></i> {dest.country}
                  </span>
                  <span className="text-muted"> 
                  <i className='bx bxs-star' style={{color:"gold"}} ></i> 4.5 </span>
                </div>
                <p className="text-black fw-bold fs-5">{dest.city}</p>
                <p className="text-secondary  " style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet </p>
                <p className="text-muted small">{dest.duration}</p>
                <div className="d-flex ">
                <p className="card-title mt-2" style={{color:"#fA7436",fontSize:"18px"}}>450$</p>
                <p className="card-title ms-auto mt-2 ">View More →</p></div>

              </div>
            </div>

          </div>
          
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
  <button className="btn  " style={{ backgroundColor: "", color: "#fA7436", border: "1px solid",width:"170px" }}>
    View All
  </button>
</div>


    </div>
  );
}
