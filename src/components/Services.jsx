import React from "react";
import { FaPlane, FaShip, FaStore, FaTruck } from "react-icons/fa";

import features from "../assets/images/feature.jpg";

const Services = () => {
  return (
    <>
      <div class="container">
        <div class="text-center pb-2">
          <h6 class="te text-uppercase font-weight-bold">Our Services</h6>
          <h1 class="mb-4">Best Logistic Services</h1>
        </div>
        <div class="row pb-3">
          <div class="col-lg-3 col-md-6 text-center mb-5">
            <div
              class="d-flex align-items-center justify-content-center  mb-4 p-4"
              id="gold"
            >
              <i class="fa fa-2x fa-plane text-dark pr-3">
                <FaPlane />
              </i>
              <h6 class="text-white font-weight-medium m-0">Air Freight</h6>
            </div>
            <p>
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
              diam sea est diam
            </p>
            <a class="border-bottom text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div class="col-lg-3 col-md-6 text-center mb-5">
            <div
              class="d-flex align-items-center justify-content-center  mb-4 p-4"
              id="gold"
            >
              <i class="fa fa-2x fa-ship text-dark pr-3">
                <FaShip />
              </i>
              <h6 class="text-white font-weight-medium m-0">Ocean Freight</h6>
            </div>
            <p>
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
              diam sea est diam
            </p>
            <a class="border-bottom text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div class="col-lg-3 col-md-6 text-center mb-5">
            <div
              class="d-flex align-items-center justify-content-center  mb-4 p-4"
              id="gold"
            >
              <i class="fa fa-2x fa-truck text-dark pr-3">
                <FaTruck />
              </i>
              <h6 class="text-white font-weight-medium m-0">Land Transport</h6>
            </div>
            <p>
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
              diam sea est diam
            </p>
            <a class="border-bottom text-decoration-none" href="">
              Read More
            </a>
          </div>
          <div class="col-lg-3 col-md-6 text-center mb-5">
            <div
              class="d-flex align-items-center justify-content-center  mb-4 p-4"
              id="gold"
            >
              <i class="fa fa-2x fa-store text-dark pr-3">
                <FaStore />
              </i>
              <h6 class="text-white font-weight-medium m-0">Cargo Storage</h6>
            </div>
            <p>
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
              diam sea est diam
            </p>
            <a class="border-bottom text-decoration-none" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div class="container-fluid  my-5" id="ash">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img class="img-fluid w-100" src={features} alt="" />
            </div>
            <div class="col-lg-7 py-5 py-lg-0">
              <h6 class=" text-uppercase font-weight-bold" id="goldicon">
                Why Choose Us
              </h6>
              <h1 class="mb-4">Faster, Safe and Trusted Logistics Services</h1>
              <p class="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <ul class="list-inline">
                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>Best In
                    Industry
                  </h6>
                </li>
                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>Emergency
                    Services
                  </h6>
                </li>
                <li>
                  <h6>
                    <i class="far fa-dot-circle text-primary mr-3"></i>24/7
                    Customer Support
                  </h6>
                </li>
              </ul>
              <a href="" class="btn  mt-3 py-2 px-4" id="gold">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
