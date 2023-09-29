import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="col-6">
            <div className="main-banner position-reltive ">
              <img src="" className="img-fluid rounded-3" alt="main banner"/>
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED FOR PROS.</h4>
                <h5>ipad S13+ pro.</h5>
                <p>From Ksh. 999.00 or Ksh.41.2/mo. </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-reltive">
              <img src="" className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>Best Sale</h4>
                <h5>ipad S13+ pro.</h5>
                <p>From Ksh. 999.00 <br/> or Ksh.41.2/mo. </p>
              </div>
            </div>
            <div className="small-banner position-reltive">
              <img src="" className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy ipad Air</h5>
                <p>From Ksh. 999.00 <br/> or Ksh.41.2/mo. </p>
              </div>
            </div>
            <div className="small-banner position-reltive">
              <img src="" className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy ipad Air</h5>
                <p>From Ksh. 999.00 <br/> or Ksh.41.2/mo. </p>
              </div>
            </div>
            <div className="small-banner position-reltive">
              <img src="" className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy ipad Air</h5>
                <p>From Ksh. 999.00 <br/> or Ksh.41.2/mo. </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="services d-flex align-items-center justify-content-between">
                    <div>
                      <img src="images/" alt="services"/>
                      <div className="d-flex align-items-center gap-15">
                        <h6>Free Shipping</h6>
                        <p className="mb-0">From all orders above Ksh. 500</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                    <img src="images/" alt="services"/>
                      <div>
                        <h6>Daily Surprise Offers</h6>
                        <p className="mb-0">Save upto 25% off</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                    <img src="images/" alt="services"/>
                      <div>
                        <h6>24/7 Support</h6>
                        <p className="mb-0">Shop with an expert</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                    <img src="images/" alt="services"/>
                      <div>
                        <h6>Affordable Prices</h6>
                        <p className="mb-0">Get Factory Default Price</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                    <img src="images/" alt="services"/>
                      <div>
                        <h6>Secure Payments</h6>
                        <p className="mb-0">100% Protected Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 itmes</p>
                  </div>
                  <img src="images/ " alt="camera"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/" alt="brand"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;