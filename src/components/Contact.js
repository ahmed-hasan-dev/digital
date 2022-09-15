import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="breadcrumbs" data-aos="fade-in">
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        Our customer support team on the other side is swift,
        feel free to send your questions.
      </p>
    </div>
  </div>
  {/* <!-- End Breadcrumbs --> */}

  {/* <!-- ======= Contact Section ======= --> */}
  <section id="contact" className="contact">
    <div data-aos="fade-up">
      {/* <iframe
        style="border: 0; width: 100%; height: 350px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.989409316365!2d67.08547089999999!3d24.864211299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c0572c40fe5%3A0xa4ac4451b6df758f!2sShaheed-e-Millat%20Rd%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1659112221232!5m2!1sen!2s
        frameborder="0"
        allowfullscreen
      ></iframe> */}
    </div>

    <div className="container" data-aos="fade-up">
      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Shaheed-e-Millat road Karachi, Pakistan</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>hasanbrothers193@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+92 3012716284</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</section>
  </>
  )
}
