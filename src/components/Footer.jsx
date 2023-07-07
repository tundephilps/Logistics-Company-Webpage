import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div class="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
          <div class="col-lg-7 col-md-6">
            <div class="row">
              <div class="col-md-6 mb-5">
                <h3 class=" mb-4" id="goldicon">
                  Get In Touch
                </h3>
                <p>
                  <i class="fa fa-map-marker-alt mr-2"></i>Location, City,
                  Country
                </p>
                <p>
                  <i class="fa fa-phone-alt mr-2"></i>+012 345 67890
                </p>
                <p>
                  <i class="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <div class="d-flex justify-content-start mt-4">
                  <a class="btn btn-outline-light btn-social mr-2" href="#">
                    <i class="fab fa-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                  <a class="btn btn-outline-light btn-social mr-2" href="#">
                    <i class="fab fa-facebook-f">
                      <FaFacebook />
                    </i>
                  </a>
                  <a class="btn btn-outline-light btn-social mr-2" href="#">
                    <i class="fab fa-linkedin-in">
                      <FaLinkedin />
                    </i>
                  </a>
                  <a class="btn btn-outline-light btn-social" href="#">
                    <i class="fab fa-instagram"></i>
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div class="col-md-6 mb-5">
                <h3 class=" mb-4" id="goldicon">
                  Quick Links
                </h3>
                <div class="d-flex flex-column justify-content-start">
                  <a class="text-white mb-2" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Home
                  </a>
                  <a class="text-white mb-2" href="#">
                    <i class="fa fa-angle-right mr-2"></i>About Us
                  </a>
                  <a class="text-white mb-2" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Our Services
                  </a>
                  <a class="text-white mb-2" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Pricing Plan
                  </a>
                  <a class="text-white" href="#">
                    <i class="fa fa-angle-right mr-2"></i>Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 mb-5">
            <h3 class=" mb-4" id="goldicon">
              Newsletter
            </h3>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div class="w-100">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div class="input-group-append">
                  <button class="btn  px-4" id="gold">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "#3E3E4E !important" }}
      >
        <div class="row">
          <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p class="m-0 text-white">
              &copy;{" "}
              <a href="#" id="goldicon">
                Optimum Logistics
              </a>
              . All Rights Reserved. Designed by{" "}
              <a href="https://freewebsitecode.com" id="goldicon">
                Tunde Philps
              </a>
            </p>
          </div>
          <div class="col-lg-6 text-center text-md-right">
            <ul class="nav d-inline-flex">
              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
