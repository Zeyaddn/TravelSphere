import Logo from '/images/logo.png.webp';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparant">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Logo"
            width="102"
            height="40"
            style={{
              filter: 'invert(47%) sepia(76%) saturate(1795%) hue-rotate(10deg)',
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              padding: 0,
            }}
          >
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link active" aria-current="page" href="#!">
                HOME
              </a>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link" href="#!">
                ABOUT 
              </a>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link" href="#!">
                TOUR PACKAGES
              </a>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link" href="#!">
                OUR SERVICES
              </a>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link" href="#!">
                GALLERY
              </a>
            </li>
            <li className="nav-item" style={{ margin: '0 15px' }}>
              <a className="nav-link" href="#!">
                CONTACT
              </a>
            </li>
          </ul>

          <div
            className="navbar-contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto', 
              whiteSpace: 'nowrap', 
            }}
          >
            <i
              className="bx bx-phone"
              style={{
                fontSize: '25px',
                color: "#fA7436",
                marginRight: '10px',  
              }}
            ></i>
            <span className='phone' style={{ fontSize: '15px', marginRight: "10px" }}>+123 55 552 </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
