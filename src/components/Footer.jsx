

import airbnb from "/images/client-1.png";
import amazon from "/images/client-2.png";
import fedex from "/images/client-3.png";
import google from "/images/client-4.png";
import microsoft from "/images/client-5.png";
import ola from "/images/client-6.png";
import walmart from "/images/client-7.png";
import oyo from "/images/client-8.png";

const PartnersFooter = () => {
  const partners = [airbnb, amazon, fedex, google, microsoft, ola, walmart, oyo];

  return (
    <div className="container-fluid text-center  Footer" style={{cursor:"pointer"}}>
      <div className="row justify-content-center align-items-center  " style={{}}>
        {partners.map((logo, index) => (
          <div key={index} className="col-md-3 col-6 ">
            <img loading="lazy" src={logo} alt="Partner Logo" className="img-fluid" style={{ maxHeight: "50px", margin:"15px" ,padding:"0px"}} />
          </div>
        ))}
      </div>
      <footer className="bg-light pt-5 pb-4 " style={{ backgroundColor: "#FAF3EE" , marginTop:"110px" }}>
      <div className="container text-center text-md-start">
        <div className="row">
          
          <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
            <h5 className="fw-bold text-uppercase mb-3 foot" style={{ color: "#FA7436" }}>Travel Agents</h5>
            <p className="text-muted" style={{ maxWidth: "250px" }}>
              We believe brand interaction is key in communication. Real innovations and a positive.
            </p>
            <div className="d-flex gap-3">
              <i className="bx bxl-twitter fs-4" style={{ color: "#FA7436" }}></i>
              <i className="bx bxl-instagram fs-4" style={{ color: "#FA7436" }}></i>
              <i className="bx bxl-youtube fs-4" style={{ color: "#FA7436" }}></i>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold mb-3">About us</h6>
            <p className="text-muted">Features</p>
            <p className="text-muted">FA</p>
            <p className="text-muted">News</p>
            <p className="text-muted">Pricing</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <p className="text-muted">Core values</p>
            <p className="text-muted">Partner w/ us</p>
            <p className="text-muted">Blog</p>
            <p className="text-muted">Contact</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <p className="text-muted">Support center</p>
            <p className="text-muted">Feedback</p>
            <p className="text-muted">Accessibility</p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="fw-bold mb-3">Get in touch</h6>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your email here..."
              style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "10px" }}
            />
            <button className="btn text-white w-100" style={{ backgroundColor: "#FA7436", borderRadius: "5px" }}>
              Get Access
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-4 pt-3 border-top">
          <p className="text-muted small tex">ZeyadElassad © 2025 All Rights Reserved</p>
          <div className="d-flex justify-content-center gap-3">
            <p className="text-muted small">Terms of Service</p>
            <p className="text-muted small">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default PartnersFooter;
