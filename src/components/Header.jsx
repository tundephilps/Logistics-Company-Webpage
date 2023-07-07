import React from "react";

const Header = () => {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
          <h1 class=" mb-4" id="goldicon">
            Safe & Faster
          </h1>
          <h1 class="text-white display-3 mb-5">Logistics Services</h1>
          <div class="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-light"
                style={{ padding: "30px" }}
                placeholder="Tracking Id"
              />
              <div class="input-group-append">
                <button class="btn  px-3" id="gold">
                  Track & Trace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
