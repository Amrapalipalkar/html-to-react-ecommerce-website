
import React from "react";
import { Link } from "react-router-dom";
import Blogger from "../Components/Blogger/Blogger";
import Footer from "../Components/Footer";
import Brand from "../Components/Brand";
import Ab1 from "../Components/Ab/Ab1/Ab1";
import Ab3 from "../Components/Ab/Ab3/Ab3";
import Ab2 from "../Components/Ab/Ab2/Ab2";

export default function Home() {
  return (
    <>
      {/* start the main contain */}
      <div className="main-banner" id="home">
        {/* start the header */}
        <header className="header">
          <div className="container-fluid px-lg-5">
            <nav className="py-4">
              <div id="logo">
                <h1>
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
                <li className="active">
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
          </div>
        </header>
        {/* end the header  */}

        {/* start the banner */}
        <div className="banner-info">
          <p>Trending of the week</p>
          <h3 className="mb-4">Casual Shoes for Men</h3>
          <div className="ban-buttons">
            <Link to="/shop">
              <button className="btn">Shop Now</button>
            </Link>
            <Link to="/Blog">
              <button className="btn active">Read More</button>
            </Link>
          </div>
        </div>
        {/* end the banner */}
      </div>
      {/* end the main-content */}

      {/* start the about */}
      <Ab1 />
      <Ab3 />
      <Ab2 />
      {/* end the about */}

      <Blogger />
      <Brand />
      <Footer />
    </>
  );
}
