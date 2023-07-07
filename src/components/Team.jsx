import React from "react";

import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <div class="container-fluid pt-5">
        <div class="container">
          <div class="text-center pb-2">
            <h6 class="text-primary text-uppercase font-weight-bold">
              Delivery Team
            </h6>
            <h1 class="mb-4">Meet Our Delivery Team</h1>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="team card position-relative overflow-hidden border-0 mb-5">
                <img class="card-img-top" src={team1} alt="" />
                <div class="card-body text-center p-0">
                  <div class="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 class="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div
                    class="team-social d-flex align-items-center justify-content-center "
                    id="gold"
                  >
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-twitter">
                        <FaTwitter />
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-facebook-f">
                        <FaFacebook />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-linkedin-in">
                        <FaLinkedin />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social" href="#">
                      <i class="fab fa-instagram">
                        <FaInstagram />{" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team card position-relative overflow-hidden border-0 mb-5">
                <img class="card-img-top" src={team2} alt="" />
                <div class="card-body text-center p-0">
                  <div class="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 class="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div
                    class="team-social d-flex align-items-center justify-content-center "
                    id="gold"
                  >
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-twitter">
                        <FaTwitter />
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-facebook-f">
                        <FaFacebook />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-linkedin-in">
                        <FaLinkedin />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social" href="#">
                      <i class="fab fa-instagram">
                        <FaInstagram />{" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team card position-relative overflow-hidden border-0 mb-5">
                <img class="card-img-top" src={team3} alt="" />
                <div class="card-body text-center p-0">
                  <div class="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 class="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div
                    class="team-social d-flex align-items-center justify-content-center "
                    id="gold"
                  >
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-twitter">
                        <FaTwitter />
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-facebook-f">
                        <FaFacebook />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-linkedin-in">
                        <FaLinkedin />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social" href="#">
                      <i class="fab fa-instagram">
                        <FaInstagram />{" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team card position-relative overflow-hidden border-0 mb-5">
                <img class="card-img-top" src={team4} alt="" />
                <div class="card-body text-center p-0">
                  <div class="team-text d-flex flex-column justify-content-center bg-secondary">
                    <h5 class="font-weight-bold">Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div
                    class="team-social d-flex align-items-center justify-content-center "
                    id="gold"
                  >
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-twitter">
                        <FaTwitter />
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-facebook-f">
                        <FaFacebook />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social mr-2" href="#">
                      <i class="fab fa-linkedin-in">
                        <FaLinkedin />{" "}
                      </i>
                    </a>
                    <a class="btn btn-outline-dark btn-social" href="#">
                      <i class="fab fa-instagram">
                        <FaInstagram />{" "}
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
