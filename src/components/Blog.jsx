import React from "react";
import blog1 from "../assets/images/blog-1.jpg";
import user from "../assets/images/user.jpg";
import blog2 from "../assets/images/blog-2.jpg";

const Blog = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
          <h1 class="text-white display-3">Latest Blog</h1>
          <div class="d-inline-flex align-items-center text-white">
            <p class="m-0">
              <a class="text-white" href="">
                Home
              </a>
            </p>
            <i class="fa fa-circle px-3"></i>
            <p class="m-0">Blog</p>
          </div>
        </div>
      </div>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-12 mb-3">
                <div class="position-relative">
                  <img class="img-fluid w-100" src={blog1} alt="" />
                  <div
                    class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class=" mb-3" style={{ padding: "30px" }} id="ash">
                  <div class="d-flex mb-3">
                    <div class="d-flex align-items-center">
                      <img
                        class="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src={user}
                        alt=""
                      />
                      <a class="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div class="d-flex align-items-center ml-4">
                      <i class="far fa-bookmark text-primary"></i>
                      <a class="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 class="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    class="border-bottom  text-uppercase text-decoration-none"
                    href=""
                    id="goldicon"
                  >
                    Read More <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <div class="position-relative">
                  <img class="img-fluid w-100" src={blog2} alt="" />
                  <div
                    class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class=" mb-3" style={{ padding: "30px" }} id="ash">
                  <div class="d-flex mb-3">
                    <div class="d-flex align-items-center">
                      <img
                        class="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src={user}
                        alt=""
                      />
                      <a class="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div class="d-flex align-items-center ml-4">
                      <i class="far fa-bookmark text-primary"></i>
                      <a class="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 class="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    class="border-bottom  text-uppercase text-decoration-none"
                    href=""
                    id="goldicon"
                  >
                    Read More <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <div class="position-relative">
                  <img class="img-fluid w-100" src={blog1} alt="" />
                  <div
                    class="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      bottom: "-30px",
                      right: "30px",
                    }}
                  >
                    <h4 class="font-weight-bold mb-n1">01</h4>
                    <small class="text-white text-uppercase">Jan</small>
                  </div>
                </div>
                <div class=" mb-3" style={{ padding: "30px" }} id="ash">
                  <div class="d-flex mb-3">
                    <div class="d-flex align-items-center">
                      <img
                        class="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                        src={user}
                        alt=""
                      />
                      <a class="text-muted ml-2" href="">
                        John Doe
                      </a>
                    </div>
                    <div class="d-flex align-items-center ml-4">
                      <i class="far fa-bookmark text-primary"></i>
                      <a class="text-muted ml-2" href="">
                        Web Design
                      </a>
                    </div>
                  </div>
                  <h4 class="font-weight-bold mb-3">
                    Kasd tempor diam sea justo dolor
                  </h4>
                  <p>
                    Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor
                    dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem
                    lorem sea sed diam est lorem magna
                  </p>
                  <a
                    class="border-bottom text-uppercase text-decoration-none"
                    href=""
                    id="goldicon"
                  >
                    Read More <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <nav aria-label="Page navigation">
                  <ul class="pagination pagination-lg justify-content-center mb-0">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-5 mt-lg-0">
            <div class="mb-5">
              <div style={{ padding: "30px" }} id="ash">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-0 p-4"
                    placeholder="Keyword"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text   text-white" id="gold">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5">
              <h3 class="mb-4">Categories</h3>
              <div style={{ padding: "30px" }} id="ash">
                <ul class="list-inline m-0">
                  <li class="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a class="text-dark" href="#">
                      <i class="fa fa-angle-right text-primary mr-2"></i>Web
                      Design
                    </a>
                    <span class="badge badge-secondary badge-pill">150</span>
                  </li>
                  <li class="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a class="text-dark" href="#">
                      <i class="fa fa-angle-right text-primary mr-2"></i>Web
                      Development
                    </a>
                    <span class="badge badge-secondary badge-pill">131</span>
                  </li>
                  <li class="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a class="text-dark" href="#">
                      <i class="fa fa-angle-right text-primary mr-2"></i>Online
                      Marketing
                    </a>
                    <span class="badge badge-secondary badge-pill">78</span>
                  </li>
                  <li class="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a class="text-dark" href="#">
                      <i class="fa fa-angle-right text-primary mr-2"></i>Keyword
                      Research
                    </a>
                    <span class="badge badge-secondary badge-pill">56</span>
                  </li>
                  <li class="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                    <a class="text-dark" href="#">
                      <i class="fa fa-angle-right text-primary mr-2"></i>Email
                      Marketing
                    </a>
                    <span class="badge badge-secondary badge-pill">98</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mb-5">
              <h3 class="mb-4">Recent Post</h3>
              <div class="d-flex mb-3">
                <img
                  class="img-fluid"
                  src={blog1}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  class="d-flex align-items-center text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                  id="ash"
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div class="d-flex mb-3">
                <img
                  class="img-fluid"
                  src={blog2}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  class="d-flex align-items-center text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                  id="ash"
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div class="d-flex mb-3">
                <img
                  class="img-fluid"
                  src={blog1}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  class="d-flex align-items-center text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                  id="ash"
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div class="d-flex mb-3">
                <img
                  class="img-fluid"
                  src={blog2}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  class="d-flex align-items-center text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                  id="ash"
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
              <div class="d-flex mb-3">
                <img
                  class="img-fluid"
                  src={blog1}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  alt=""
                />
                <a
                  href=""
                  class="d-flex align-items-center  text-dark text-decoration-none px-3"
                  style={{ height: "80px" }}
                  id="ash"
                >
                  Lorem ipsum dolor sit amet consec adipis elit
                </a>
              </div>
            </div>
            <div class="mb-5">
              <img src={{ blog1 }} alt="" class="img-fluid" />
            </div>
            <div class="mb-5">
              <h3 class="mb-4">Tag Cloud</h3>
              <div class="d-flex flex-wrap m-n1">
                <a href="" class="btn btn-secondary m-1">
                  Design
                </a>
                <a href="" class="btn btn-secondary m-1">
                  Development
                </a>
                <a href="" class="btn btn-secondary m-1">
                  Marketing
                </a>
                <a href="" class="btn btn-secondary m-1">
                  SEO
                </a>
                <a href="" class="btn btn-secondary m-1">
                  Writing
                </a>
                <a href="" class="btn btn-secondary m-1">
                  Consulting
                </a>
              </div>
            </div>
            <div class="mb-5">
              <img src={blog2} alt="" class="img-fluid" />
            </div>
            <div>
              <h3 class="mb-4">Plain Text</h3>
              <div class=" text-center" style={{ padding: "30px" }} id="ash">
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <a href="" class="btn  py-2 px-4" id="gold">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
