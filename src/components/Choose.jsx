const choose = () => {
    return (
      <div className="container py-5 choose mt-5">
        <div className="row align-items-center">
          
          <div className="col-md-4 text-center text-md-start">
            <h2 className="fw-bold">
             <span>Why <span className="choose-tex" style={{ color: "#FA7436" }}>Choose</span></span>   Us
            </h2>
            <p className="text-muted">
              We ensure that you’ll embark on a perfectly planned, safe vacation
              at a price you can afford.
            </p>
            <button className="btn  mt-3" style={{ backgroundColor: "", color: "#fA7436", border: "1px solid",width:"170px" }}>
    Learn more  </button>
          </div>
  
       
          <div className="col-md-8 mt-3">
            <div className="row text-center">
       
              <div className="col-md-4">
                <div className="border rounded-3 p-4">
                  <div className="mb-3">
                    <span className="d-inline-block p-3 rounded-3" style={{ backgroundColor: "#67B4FC" }}>
                      <i className="bx bx-award fs-3 text-white"></i>
                    </span>
                  </div>
                  <h5 className="">Best Travel Agency</h5>
                  <p className="text-muted small">
                    Travel agencies that provide round trip, one way, and multi trip services.
                  </p>
                </div>
              </div>
  
            
              <div className="col-md-4">
                <div className="border rounded-3 p-4">
                  <div className="mb-3">
                    <span className="d-inline-block p-3 rounded-3" style={{ backgroundColor: "#FA7436" }}>
                      <i className="bx bx-dollar fs-3 text-white"></i>
                    </span>
                  </div>
                  <h5 className="">Competitive Price</h5>
                  <p className="text-muted small">
                    The price offered are affordable starting from the ordinary to the exclusive.
                  </p>
                </div>
              </div>
  
          
              <div className="col-md-4">
                <div className="border rounded-3 p-4">
                  <div className="mb-3">
                    <span className="d-inline-block p-3 rounded-3" style={{ backgroundColor: "#FC6771" }}>
                      <i className="bx bx-world fs-3 text-white"></i>
                    </span>
                  </div>
                  <h5 className="">Global Coverage</h5>
                  <p className="text-muted small">
                    There are many tourist attractions, hotels and interesting entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default choose;
  