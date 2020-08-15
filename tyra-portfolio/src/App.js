import React from "react";
import logo from "./logo.svg";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  const portfolioLinks = [
    {
      title: "In-Or-Out",
      caption:
        "Pickup/Delivery Restaurant Search App for consumers with dietary restrictions.",
     imgSrc:
        "assets/img/demo-image-01.jpg"
    },
    {
      title: "Restaurateur",
      caption: "Simple Online Menu Builder for small business owners",
     imgSrc: "assets/img/demo-image-02.jpg"
    },
    {
      title: "README.md Generator",
      caption: "Node CLI for README.md generation for developers.",
     imgSrc: "assets/img/demo-image-01.jpg"
    },
    {
      title: "Team Member Tracker",
      caption: "Node CLI to generate HTML page displaying all team members",
     imgSrc: "assets/img/demo-image-02.jpg"
    },
    {
      title: "Employee SQL Database",
      caption: "Node CLI to manage employees in mySQL database",
     imgSrc: "assets/img/demo-image-01.jpg"
    }
  ];

  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            TR
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Tyra Rodriguez</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              Full Stack Development
            </h2>
            <a className="btn btn-primary js-scroll-trigger" href="#about">
              About Me
            </a>
          </div>
        </div>
      </header>

      <section className="about-section text-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About Me</h2>
              <p className="text-white-50">
                I am a Full Stack development student. Your portfolio website is
                essentially like your business card where it’s the initial point
                of contact your potential customers make contact with you and
                your work. So, it’s always a good practice to include an about
                page where you communicate important information about yourself,
                your work, your experience, your approach, and skills.
              </p>
            </div>
          </div>
          <img className="img-fluid" src="assets/img/ipad.png" alt="" />
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

      <section className="signup-section" id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
              <form className="form-inline d-flex">
                <input
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  type="email"
                  placeholder="Enter email address..."
                />
                <button className="btn btn-primary mx-auto" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">GitHub</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">Add Link Here</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">LinkedIn</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">Add Link</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright © Your Website 2020</div>
      </footer>
    </div>
  );
}

export default App;
