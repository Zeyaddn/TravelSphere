

const HeroSection = () => {
    return (
      <div className="container hero-container py-5">
        <div className="row align-items-center">
        
          <div className="col-md-6 col-12 text-md-start text-center mt-5">
            <h1 className="fw-bold" style={{fontSize:"72px", color:"black"}}>
              It’s a Big World <br /> Out There, <span className="section-span" style={{color:"#FA7436"}}>Go <br /> Explore</span>
            </h1>
          </div>
  
       
          <div className="col-md-6 col-12 text-md-start text-center mt-4 ms-0 mt-md-0 ">
            <p className="text-muted"  style={{marginLeft:"px" ,marginTop:"70px"}}>
              Time Tracking Software Used By Millions. A Simple Time <br /> Tracker And
              Timesheet App That Lets You Track Work Hours <br /> Across Projects...
            </p>
            <button  className="btn btn- px-4 py-2  mt-3 " style={{backgroundColor:"#FA7436" ,color:"white"}}>DISCOVER NOW</button>
          </div>
        </div>
      </div>

         
    );
  };
  
  export default HeroSection;
  