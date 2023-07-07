import React from "react";

const Quote = () => {
  return (
    <div>
      <div class="container-fluid  my-5" id="ash">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 py-5 py-lg-0">
              <h6 class=" text-uppercase font-weight-bold" id="goldicon">
                Get A Quote
              </h6>
              <h1 class="mb-4">Request A Free Quote</h1>
              <p class="mb-4">
                Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr
                stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat
                sed diam duo
              </p>
              <div class="row">
                <div class="col-sm-4">
                  <h1 class=" mb-2" data-toggle="counter-up" id="goldicon">
                    225
                  </h1>
                  <h6 class="font-weight-bold mb-4">SKilled Experts</h6>
                </div>
                <div class="col-sm-4">
                  <h1 class=" mb-2" data-toggle="counter-up" id="goldicon">
                    1050
                  </h1>
                  <h6 class="font-weight-bold mb-4">Happy Clients</h6>
                </div>
                <div class="col-sm-4">
                  <h1 class=" mb-2" data-toggle="counter-up" id="goldicon">
                    2500
                  </h1>
                  <h6 class="font-weight-bold mb-4">Complete Projects</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class=" py-5 px-4 px-sm-5" id="gold">
                <form class="py-5">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control border-0 p-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control border-0 p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div class="form-group">
                    <select
                      class="custom-select border-0 px-4"
                      style={{ height: "47px" }}
                    >
                      <option selected>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 1</option>
                      <option value="3">Service 1</option>
                    </select>
                  </div>
                  <div>
                    <button
                      class="btn btn-dark btn-block border-0 py-3"
                      type="submit"
                    >
                      Get A Quote
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
