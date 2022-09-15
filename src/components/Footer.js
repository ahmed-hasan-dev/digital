import React from 'react'

export default function Footer() {
  return (

    <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">
  
          <div className="col-lg-3 col-md-6 footer-contact">
            <h2>DIGITIZAL <h6 className='box2'>(PAKISTAN INFORMATION TECHNOLOGY COURSES)</h6>
            </h2>
           
            <p>
              Shaheed-e-millat road <br/>
              Karachi, NY 75460<br/>  
              Pakistan <br/><br/>
              <strong>Phone:</strong> +92 3012716284<br/>
              <strong>Email:</strong> hasanbrothers193@gmail<br/>
            </p>
          </div>
  
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/home">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/courses">Courses</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/contact">Contact</a></li>
  
            </ul>
          </div>
  
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Digital Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Project Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Robotics</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Java Programming</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="courses.html">Python Programming</a></li>
            </ul>
          </div>
  
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Newsletter</h4>
            
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    <div className="container d-md-flex py-4">
  
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>DIGITIZAL</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
         
          Designed by <a href=" https://ahmed-hasan-dev.github.io/WebPortfolio/">Ahmed Hasan</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
  )
}
