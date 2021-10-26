import React from "react";
import Footer from "../../Components/Footer";
import { Data, Details } from "./data";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      {/* mian-content */}
      <div className="main-banner inner" id="home">
        {/* header */}
        <header className="header">
          <div className="container-fluid px-lg-5">
            {/* nav */}
            <nav className="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <Link to="/">
                    <span className="fa fa-bold" aria-hidden="true"></span>ootie
                  </Link>
                </h1>
              </div>

              <label for="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <label for="drop-2" className="toggle">
                    Drop Down{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>{" "}
                  </label>
                  <a href="#">
                    Drop Down{" "}
                    <span
                      className="fa fa-angle-down"
                      aria-hidden="true"
                    ></span>
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/shop">Shop Now</Link>
                    </li>
                    <li>
                      <Link to="/singlepage">Single Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Cantact</Link>
                </li>
              </ul>
            </nav>
            {/*  //nav */}
          </div>
        </header>
        {/* //header */}
      </div>
      {/* //main-content */}

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item active">Shop Page</li>
      </ol>

      {/* banner */}
      <section class="ab-info-main py-md-5 py-4">
        <div class="container py-md-3">
          {/* top Products */}
          <div class="row">
            {/* product left */}
            <div class="side-bar col-lg-4">
              <div class="search-bar w3layouts-newsletter">
                <h3 class="sear-head">Search Here..</h3>
                <form action="#" method="post" class="d-flex">
                  <input
                    type="search"
                    placeholder="Product name..."
                    name="search"
                    class="form-control"
                    required=""
                  />
                  <button class="btn1">
                    <span class="fa fa-search" aria-hidden="true"></span>
                  </button>
                </form>
              </div>

              {/* preference */}
              <div class="left-side my-4">
                <h3 class="sear-head">Occasion</h3>
                <ul class="w3layouts-box-list">
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Casuals</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Party</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Wedding</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">Ethnic</span>
                  </li>
                </ul>
              </div>
              {/* // preference  */}

              {/* discounts */}
              <div class="left-side">
                <h3 class="sear-head">Discount</h3>
                <ul class="w3layouts-box-list">
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">5% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">10% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">20% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">30% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">50% or More</span>
                  </li>
                  <li>
                    <input type="checkbox" class="checked" />
                    <span class="span">60% or More</span>
                  </li>
                </ul>
              </div>
              {/* //discounts */}

              {/* reviews */}
              <div class="customer-rev left-side my-4">
                <h3 class="sear-head">Customer Review</h3>
                <ul class="w3layouts-box-list">
                  <li>
                    <a href="#">
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span>5.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span>4.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star-half-o" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span>3.5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span>3.0</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star" aria-hidden="true"></span>
                      <span class="fa fa-star-half-o" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span class="fa fa-star-o" aria-hidden="true"></span>
                      <span>2.5</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* //reviews  */}

              {/* deals */}
              <div class="deal-leftmk left-side">
                <h3 class="sear-head">Special Deals</h3>
                {Details.map((item) => {
                  return (
                    <>
                      <div class="special-sec1 row mb-3">
                        <div class="img-deals col-md-4">
                          <img
                            src={`${item.imgsrc}`}
                            class="img-fluid"
                          />
                        </div>
                        <div class="img-deal1 col-md-4">
                          <h3>{`${item.name}`}</h3>
                          <Link to="/singkepage">{`${item.price}`}</Link>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* //deals */}
            </div>
            {/*  //product left */}

            {/* product right */}
            <div class="left-ads-display col-lg-8">
              <div class="row">
                {Data.map((item) => {
                  return (
                    <>
                      <div class="col-md-4 product-men">
                        <div class="product-shoe-info shoe text-center">
                          <div class="men-thumb-item">
                            <img
                              src={`${item.imgsrc}`}
                              class="img-fluid"
                            />
                            <span class="product-new-top">New</span>
                          </div>
                          <div class="item-info-product">
                            <h4>
                            <Link to="/singkepage">{`${item.name}`}</Link>
                            </h4>

                            <div class="product_price">
                              <div class="grid-price">
                                <span class="money">{`${item.price}`}</span>
                              </div>
                            </div>
                            <ul class="stars">
                              <li>
                                <a href="#">
                                  <span
                                    class="fa fa-star"
                                    aria-hidden="true"
                                  ></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span
                                    class="fa fa-star"
                                    aria-hidden="true"
                                  ></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span
                                    class="fa fa-star-half-o"
                                    aria-hidden="true"
                                  ></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span
                                    class="fa fa-star-half-o"
                                    aria-hidden="true"
                                  ></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <span
                                    class="fa fa-star-o"
                                    aria-hidden="true"
                                  ></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div class="grid-img-right mt-4 text-right">
                <span class="money">Flat 50% Off</span>
                <a href="shop-single.html" class="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //Product right */}

      <Footer />
    </>
  );
}
