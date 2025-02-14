

const AboutSection = () => {
  return (
    <div className="container about-section py-5 " style={{marginTop:"150px"}}>
      <div className="row align-items-center">
      
        <div className="col-md-6">
          <img
            src="/images/slide.webp"
            className="img-fluid rounded"
            loading="lazy"
            alt="Beach"
          />
        </div>

        
        <div className="col-md-6 about">
          <h6 className="text-uppercase abo " style={{color:"#fA7436" ,marginBottom:"50px",fontSize:"25px"}}>About Us</h6>
          <h1 className="fw-bold  " style={{fontSize:"45px"}}>
            The Best And Most <br /> Trusted <span className="highlight">Service</span>
          </h1>
          <p className="text-secondary "style={{margin:"20px"}} >
            We are the largest holiday service provider in the world with <br />
            partners and places spread all over the world by prioritizing <br />
            service and customer satisfaction.
          </p>
          <button className="btn btn-custom m-4">Learn More</button>

       
          <div className="row mt-4" style={{fontSize:"20px" }}>
            <div className="col-md-4 text-center">
              <div className="stats">200+</div>
              <small className="text-secondary">Customer <br /> & Partners</small>
            </div>
            <div className="col-md-4 text-center">
              <div className="stats">500+</div>
              <small className="text-secondary">Place In <br /> The World</small>
            </div>
            <div className="col-md-4 text-center">
              <div className="stats">1k+</div>
              <small className="text-secondary">Success <br /> Journey</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const styles = `
.about-section {
  background-color: #f8f9fa;
}
.highlight {
  color: #FA7436;
}
.btn-custom {
  background-color: #FA7436;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  border: none;
}
.btn-custom:hover {
  background-color: #e55c2c;
  color:white;
}
.stats {
  font-weight: bold;
  font-size: 50px;
  color: #FA7436;
  opacity:.5;
 

}
`;


const Style = () => <style>{styles}</style>;

const App = () => (
  <>
    <Style />
    <AboutSection />
  </>
);

export default App;
