import React from 'react'

export default function Home() {
  return (
<>
    <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

        <ol id="hero-carousel-indicators" className="carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active" style={{backgroundImage: "url("+"assets/img/home1.jpg"+")"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">    Welcome To </h2>
                <h2 className="animate__animated animate__fadeInUp">DIGITIZAL</h2>

                <a href="courses.html" className="btn-get-started scrollto animate__animated animate__fadeInUp">Learn More</a>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item active" style={{backgroundImage: "url("+"assets/img/home4.jpg"+")"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">    Welcome To </h2>
                <h2 className="animate__animated animate__fadeInUp">DIGITIZAL</h2>

                <a href="courses.html" className="btn-get-started scrollto animate__animated animate__fadeInUp">Learn More</a>
              </div>
            </div>
          </div> */}
          <div className="carousel-item"  style={{backgroundImage: "url("+"assets/img/home4.jpg"+")"}}>
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">    ADMISSIONS OPEN</h2>
                <p className="animate__animated animate__fadeInUp">AS BATCH OF 2024</p>
                <a href="courses.html" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">    ADMISSIONS OPEN</h2>
                <p className="animate__animated animate__fadeInUp">AS BATCH OF 2024</p>
                <a href="courses.html" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

          <div className="carousel-item"     >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">    ADMISSIONS OPEN</h2>
                <p className="animate__animated animate__fadeInUp">AS BATCH OF 2024</p>
                <a href="courses.html" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>
    </div>
  </section>




      <section id="about">
        <div className="container" data-aos="fade-up">
  
        <div class="section-title">
          <h2></h2>
          <p>About us</p>
        </div>

          <div className="row about-cols">
  
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/about-mission.jpg" alt="" className="img-fluid"/>
                  <div className="icon"><i className="bi bi-bar-chart"></i></div>
                </div>
                <h2 className="title"><a href="#">Our Mission</a></h2>
                <p>
                We are a Software Development and Digital Marketing agency
                  team of highly energetic, dedicated, and professional
                  individuals striving hard to help grow your audience, boost
                  your sales and awareness about your brand. We are deeply
                  passionate about digital marketing and we develop exciting and
                  innovative content that delivers surprise and delight.
                </p>
              </div>
            </div>
  
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/about-plan.jpg" alt="" className="img-fluid"/>
                  <div className="icon"><i className="bi bi-brightness-high"></i></div>
                </div>
                <h2 className="title"><a href="#">Our Plan</a></h2>
                <p>
                Digitizal was founded in 2015 with the dream of creating a
                  beautiful & engaging story your brand deserves to have. We are
                  a full-fledged Development & Marketing the agency partnered
                  with National & International Brands altogether categories.
                  during an excellent supportive & communicative culture, our
                  crazy creative team works to offer you the game.
                </p>
              </div>
            </div>
  
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/about-vision.jpg" alt="" className="img-fluid"/>
                  <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                </div>
                <h2 className="title"><a href="#">Our Vision</a></h2>
                <p>
                "Delivering measurable results to clients, employees, and
                  vendors.” “Provide the best customer results possible and
                  deliver the WOW factor through our services.” “Our mission is
                  to be the experts in marketing and sales alignment and the
                  masters of the message.Have the peace of mind that you are working with one of the best
bespoke software development.
                </p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>


      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts section-bg">
  <div className="container">

    <div className="row counters">

      <div className="col-lg-3 col-6 text-center">
        <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter"></span>
        <h2 className='box'>1234</h2>
        <p>Students</p>
      </div>

      <div className="col-lg-3 col-6 text-center">
        <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter"></span>
        <h2 className='box'>1234</h2>
        <p>Courses</p>
      </div>

      <div className="col-lg-3 col-6 text-center">
        <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
        <h2 className='box'>1234</h2>
        <p>Events</p>
      </div>

      <div className="col-lg-3 col-6 text-center">
        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
        <h2 className='box'>1234</h2>
        <p>Trainers</p>
      </div>

    </div>

  </div>
</section>
{/* <!-- End Counts Section --> */}


<section id="why-us" className="why-us">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h3>INTEGRATED SERVICES</h3>
            <p>
            The Resource Reservation setup Protocol API is used by integrated service policies to ensure an end-to-end connection.

            </p>
            <div className="text-center">
              <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-boxes d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-receipt"></i>
                  <h4>Web Development</h4>
                  <p>
                  Digitizal is a well-known and trusted agency for reliable web hosting.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-cube-alt"></i>
                  <h4>Ecommerce Development</h4>
                  <p>
                  Digitizal, we provide ecommerce website development services.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch">
                <div className="icon-box mt-4 mt-xl-0">
                  <i className="bx bx-images"></i>
                  <h4>Trending Technologies</h4>
                      <p>
                      React.JS Angular.Js Node.js has become so popular in recent years.
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>






<div></div>






{/* <!-- ======= Popular Courses Section ======= --> */}
    <section id="popular-courses" className="courses">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>
  
          <div className="row" data-aos="zoom-in" data-aos-delay="100">
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="course-item">
                <img src="assets/img/course-1.jpg" className="img-fluid" alt="..."/>
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Web Development</h4>
                    <p className="price"></p>
                  </div>
  
                  <h3>
                    <a href="course-details.html">Website Design</a>
                  </h3>
                  <p>
                    Web design refers to the design of websites that are
                    displayed on the internet.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/admin.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Admin</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;65
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--   End Course Item   --> */}
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="course-item">
                <img
                  src="assets/img/course-2.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Marketing</h4>
                    <p className="price"></p>
                  </div>
  
                  <h3>
                    <a href="course-details.html">Digital Marketing</a>
                  </h3>
                  <p>
                    Digital Marketing Pakistan™, one of the top digital
                    marketing agencies in Pakistan.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/admin.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Admin</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;42
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--   End Course Item   --> */}
  
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="course-item">
                <img
                  src="assets/img/course-3.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Content</h4>
                    <p className="price"></p>
                  </div>
  
                  <h3>
                    <a href="course-details.html">Python Programming</a>
                  </h3>
                  <p>
                    Python is an interpreted, high-level, general-purpose
                    programming language.
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src="assets/img/admin.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <span>Admin</span>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
                      <i className="bx bx-heart"></i>&nbsp;85
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>
  </div>
</section>
  




{/* trainer section */}





<section id="trainers" className="trainers">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>our</h2>
        <p>Trainers</p>
      </div>

      <div className="row" data-aos="zoom-in" data-aos-delay="100">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src="assets/img/admin.jpg" className="img-fluid" alt=""/>
            <div className="member-content">
              <h4>Admin</h4>
              <span>Web Development</span>
              <p>
                When you graduate from DIGITIZAL you will be well equipped to
                    step into challenging situations and emerge as winners.
              </p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src="assets/img/admin.jpg" className="img-fluid" alt=""/>
            <div className="member-content">
              <h4>Admin</h4>
              <span>Marketing</span>
              <p>
                Excellence is what defines us. Giving back to the society,
                    supporting your peers and excelling academically is
                    exactly what an DIGITIZAL does.
              </p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src="assets/img/admin.jpg" className="img-fluid" alt=""/>
            <div className="member-content">
              <h4>Admin</h4>
              <span>Content</span>
              <p>
                We are not only enriching your learning experience but
                    building your future. Truly we are laying a path to your
                    best possible future
              </p>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>


      </>
  )
}
