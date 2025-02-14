import "bootstrap/dist/css/bootstrap.min.css";
import car1 from "/images/video1.webp";
import car2 from "/images/video2.webp";

function Carousell() {
  return (
    <div className="container-fluid p-3 my-5 text-center bg-light " >
      <div className="row g-3 justify-content-center align-items-center " style={{ marginTop: "150px" }}>

        <div className="col-md-4">
          <img loading="lazy" className="img-fluid rounded-4" src={car1} alt="First slide" />
        </div>

        <div className="col-md-4 position-relative">
          <img loading="lazy" className="img-fluid rounded-4" src={car2} alt="Second slide" />
          <button className="buttonn">
          <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
          </svg>
        </button>
        </div>

        <div className="col-md-4">
          <img loading="lazy" className="img-fluid rounded-4" src={car1} alt="First slide" />
        </div>

      </div>
      <div className="d-flex justify-content-center mt-5">
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#FA7436" }}></span>
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#D3D3D3" }}></span>
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#D3D3D3" }}></span>
      </div>
    </div>
  );
}

export default Carousell;