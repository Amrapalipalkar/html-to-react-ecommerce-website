
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div class="main-banner inner" id="home">
        <header class="header">
          <div class="container-fluid px-lg-5">
            <nav class="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <Link to="/">
                    <span class="fa fa-bold" aria-hidden="true"></span>ootie
                  </Link>
                </h1>
              </div>
              <label for="drop" class="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul class="menu mt-2">
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
                  <label for="drop-2" class="toggle">
                    Drop Down{" "}
                    <span class="fa fa-angle-down" aria-hidden="true"></span>{" "}
                  </label>
                  <a href="#">
                    Drop Down{" "}
                    <span class="fa fa-angle-down" aria-hidden="true"></span>
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
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
