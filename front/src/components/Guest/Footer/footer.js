import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <section id="topbar" className="d-none d-lg-block">
            <div className="container clearfix">
              <div className="contact-info float-left">
                <i className="fa fa-envelope-o" />
                <a href="mailto:contact@example.com">contact@example.com</a>
                <i className="fa fa-phone" /> +1 5589 55488 55
              </div>
              <div className="social-links float-right">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </section>
          {/*==========================
    Header
  ============================*/}
          <header id="header">
            <div className="container">
              <div id="logo" className="pull-left">
                <h1>
                  <a href="#body" className="scrollto">
                    Washy<span>Wash</span>
                  </a>
                </h1>
                {/* Uncomment below if you prefer to use an image logo */}
                {/* <a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
              </div>
              
                <nav id="nav-menu-container" className="navbar-fixed-top">
                  <ul className="nav-menu">
                    <li className="menu-active">
                      <a href="#body">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
            
              {/* #nav-menu-container */}
            </div>
          </header>
          {/* #header */}
          {/*==========================
    Intro Section
  ============================*/}
          <section id="intro">
            <div className="intro-content">
              <h2>
                Making <span>you Clean</span>
              </h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a href="#portfolio" className="btn-projects scrollto">
                  Our Projects
                </a>
              </div>
            </div>
            <div id="intro-carousel" className="owl-carousel">
              <div
                className="item"
                style={{
                  backgroundImage: 'url("img/intro-carousel/1.jpg")'
                }}
              />
              <div
                className="item"
                style={{
                  backgroundImage: 'url("img/intro-carousel/2.jpg")'
                }}
              />
              <div
                className="item"
                style={{
                  backgroundImage: 'url("img/intro-carousel/3.jpg")'
                }}
              />
              <div
                className="item"
                style={{
                  backgroundImage: 'url("img/intro-carousel/4.jpg")'
                }}
              />
              <div
                className="item"
                style={{
                  backgroundImage: 'url("img/intro-carousel/5.jpg")'
                }}
              />
            </div>
          </section>
          {/* #intro */}
          <main id="main">
            {/*==========================
About Section
    ============================*/}
            <section id="about" className="wow fadeInUp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 about-img">
                    <img src="img/about-img.jpg" alt />
                  </div>
                  <div className="col-lg-6 content">
                    <h2>About Washy Wash</h2>
                    <h3>
                      WashyWash is a company that is set out to change how
                      people clean their clothes globally, switching people
                      from the outdated PERC Dry Clean system to our
                      EcoClean technology. It started as a simple concept:
                      give people the best possible cleaning quality, with
                      zero health risks coupled with the best customer
                      service and technology out there.
                    </h3>
                  </div>
                </div>
              </div>
            </section>
            {/* #about */}
            {/*==========================
Services Section
    ============================*/}
            <section id="services">
              <div className="container">
                <div className="section-header">
                  <h2>Services</h2>
                  <p>
                    Commercial Services is offered by Pressure Washing
                    Services Inc. Each business type requires specific
                    services. We provide the commercial services that will
                    fulfill your need. Shopping malls, banks, restaurants
                    and convenience store’s may need different commercial
                    services at different times. The point is this…. We are
                    flexible with scheduling and services to accommodate
                    your needs.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box wow fadeInLeft">
                      <div className="icon">
                        <i className="fa fa-bar-chart" />
                      </div>
                      <h4 className="title">
                        <a href>Lorem Ipsum</a>
                      </h4>
                      <p className="description">
                        Voluptatum deleniti atque corrupti quos dolores et
                        quas molestias excepturi sint occaecati cupiditate
                        non provident etiro rabeta lingo.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box wow fadeInRight">
                      <div className="icon">
                        <i className="fa fa-picture-o" />
                      </div>
                      <h4 className="title">
                        <a href>Dolor Sitema</a>
                      </h4>
                      <p className="description">
                        Minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                        tarad limino ata nodera clas.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="box wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="fa fa-shopping-bag" />
                      </div>
                      <h4 className="title">
                        <a href>Sed ut perspiciatis</a>
                      </h4>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                        trinige zareta lobur trade.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="box wow fadeInRight"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="fa fa-map" />
                      </div>
                      <h4 className="title">
                        <a href>Magni Dolores</a>
                      </h4>
                      <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est
                        laborum rideta zanox satirente madera
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* #services */}
            {/*==========================
Clients Section
    ============================*/}

            {/*==========================
Our Portfolio Section
    ============================*/}

            {/*==========================
Testimonials Section
    ============================*/}

            {/*==========================
Call To Action Section
   
    {/*==========================
Our Team Section
    ============================*/}

            {/*==========================
Contact Section
    ============================*/}
            <section id="contact" className="wow fadeInUp">
              <div className="container">
                <div className="section-header">
                  <h2>Contact Us</h2>
                  <p>
                    Sed tamen tempor magna labore dolore dolor sint tempor
                    duis magna elit veniam aliqua esse amet veniam enim
                    export quid quid veniam aliqua eram noster malis nulla
                    duis fugiat culpa esse aute nulla ipsum velit export
                    irure minim illum fore
                  </p>
                </div>
                <div className="row contact-info">
                  <div className="col-md-4">
                    <div className="contact-address">
                      <i className="ion-ios-location-outline" />
                      <h3>Address</h3>
                      <address>A108 Adam Street, NY 535022, USA</address>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-phone">
                      <i className="ion-ios-telephone-outline" />
                      <h3>Phone Number</h3>
                      <p>
                        <a href="tel:+155895548855">+1 5589 55488 55</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-email">
                      <i className="ion-ios-email-outline" />
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:info@example.com">
                          info@example.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
                  width="100%"
                  height={380}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
              <div className="container">
                <div className="form">
                  <div id="sendmessage">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage" />
                  <form
                    action
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validation" />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validation" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="validation" />
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
            {/* #contact */}
          </main>
          {/*==========================
    Footer
  ============================*/}
          <footer id="footer">
            <div className="container">
              <div className="copyright">
                © Copyright <strong>Reveal</strong>. All Rights Reserved
              </div>
              <div className="credits">
                {/*
    All the links in the footer should remain intact.
    You can delete the links only if you purchased the pro version.
    Licensing information: https://bootstrapmade.com/license/
    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Reveal
  */}
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </footer>
          {/* #footer */}
          <a href="#" className="back-to-top">
            <i className="fa fa-chevron-up" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
