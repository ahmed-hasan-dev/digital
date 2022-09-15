import React from "react";

export default function About() {
  return (
    <>
      <div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Digitizal Software Development & Digital Marketing Agency is one of
            the leading agency for online marketing and development in Pakistan.
            We have expert professional staff. Digitizal marketing agency
            started in 2015. We have extensive marketing experience and the
            perfect skill to set to take your business to new heights. We offer
            a full range of marketing solutions and advertisement services.
            Digitizal is a leading full-service digital transformation agency
            that focuses on providing digital solutions for e-commerce, graphic
            designing, and website development, and SEO services.
          </p>
        </div>
      </div>

      <section id="about">
        <div className="container" data-aos="fade-up">
          <div className="row about-cols">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="about-col">
                <div className="img">
                  <img
                    src="assets/img/about-mission.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Mission</a>
                </h2>
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
                  <img
                    src="assets/img/about-plan.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Story</a>
                </h2>
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
                  <img
                    src="assets/img/about-vision.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Our Vision</a>
                </h2>
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

      <section id="counts" className="counts section-bg">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h2 className="box">1234</h2>
              <p>Students</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="64"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h2 className="box">1234</h2>
              <p>Courses</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="42"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h2 className="box">1234</h2>
              <p>Events</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <h2 className="box">1234</h2>
              <p>Trainers</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>What are they saying</p>
          </div>

          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/admin.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      At DIGITIZAL we have built a holistic institution that
                      works on all fronts to unlock your full potential. From
                      the Experiential Learning Program.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/admin.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      At DIGITIZAL, apart from nurturing your strengths, we also
                      provide a positive space where collaboration and
                      camaraderie aid in fostering networking skills too.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/admin.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      We have built DIGITIZAL to help individuals realize their
                      full potential. It is a place where along with core
                      educational programs, we also impart values, principals
                      and core social skills.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/admin.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Admin</h3>
                    <h4>Freelancer</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      We offer well-designed academic programs, initiatives,
                      counseling and mentorship programs that are at par with
                      the finest educational institutions.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/admin.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      DIGITIZAL has also integrated technology to help you
                      access, keep track and gain feedback on your progress.
                      Through the means of groundbreaking initiatives.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
}
