import React from "react";
import about from "../assets/images/about.jpg";
import features from "../assets/images/feature.jpg";

const About = () => {
  return (
    <div>
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 pb-4 pb-lg-0">
              <img class="img-fluid w-100" src={about} alt="" />
              <div class="text-dark text-center p-4" id="gold">
                <h3 class="m-0">Let the Pros handle it</h3>
              </div>
            </div>
            <div class="col-lg-7">
              <h6 class=" text-uppercase font-weight-bold" id="goldicon">
                About Us
              </h6>
              <h1 class="mb-4">Trusted & Faster Logistic Service Provider</h1>
              <p class="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div class="d-flex align-items-center pt-2">
                <button
                  type="button"
                  class="btn-play"
                  data-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 class="font-weight-bold m-0 ml-4">Play Video</h5>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="videoModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src=""
                    id="video"
                    allowscriptaccess="always"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
