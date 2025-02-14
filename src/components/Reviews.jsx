import  { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import tes1 from "/images/testimonials-1.jpg";
import tes2 from "/images/testimonials-2.jpg";
import tes3 from "/images/testimonials-3.jpg";
import tes4 from "/images/testimonials-4.jpg";



const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const images = [tes1, tes2, tes3, tes4];

  useEffect(() => {
    fetch("https://679fdbb124322f8329c4c8f3.mockapi.io/api/tourist/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data.slice(0, 4)));
  }, []);

  return (
    <div className="container-fluid bg-white p-2  text-center" style={{ marginTop: "200px" }}>
      <div className="text-center py-5 bg-light">
        <div className="container">
          <h2 className=" text-dark rev text-lg" >
            Contact us to review <span style={{ color: "#FA7436"  }} className="revh"> <br />your experience</span> with us
          </h2>
          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "600px" }}>
            Give us feedback and let us know what experiences you had while on vacation with us
          </p>
        </div>
      </div>
      
      <div className="row justify-content-center">
        {reviews.map((review, index) => (
          <div key={review.id} className="col-md-3">
            <div className="card shadow-sm p-3 mb-4">
              <img loading="lazy"
                src={images[index] || "https://via.placeholder.com/50"}
                alt=""
                className="rounded-circle mx-auto d-block img-review"
                width="50"
                height="50"
              />
              <div className="card-body">
                <p className="card-text text-muted">{review.comment.slice(0, 30)}...</p>
                <h5 className="card-title card-review">{review.name}</h5>
                <p className="text-warning">
                  {Array(Math.min(review.rating, 7))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className='bx bxs-star text-warning'></i>
                    ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#FA7436" }}></span>
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#D3D3D3" }}></span>
        <span className="mx-1" style={{ width: "25px", height: "5px", borderRadius: "2px", backgroundColor: "#D3D3D3" }}></span>
      </div>
    </div>
  );
};

export default Reviews;