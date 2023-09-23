import React from 'react'

const Footer = () => {
  return <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/email.png" alt="newsletter"/>
              <h2 className="mb-0 text-white"> Sign Up for Newsletter</h2>
            </div> 
          </div>
          <div className="col-7">
          <div className="input-group">
            <input type="text" className="form-control py-1" placeholder="Your Telephone Number" aria-label="Search Products Here..." aria-describedby="basic-addon2"/>
            <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
              </span>
          </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-3"></footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 mb-0 text-white">
            <p className="text-center">&copy; {new Date().getFullYear()}; Powered by developer's corner</p>
          </div>
        </div>
      </div>
    </footer>
  </>;
}

export default Footer