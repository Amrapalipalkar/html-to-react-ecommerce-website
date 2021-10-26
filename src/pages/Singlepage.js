
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Brand from "../Components/Brand";
import Ab2 from "../Components/Ab/Ab2/Ab2";
import Ab3 from "../Components/Ab/Ab3/Ab3";
import { Link } from "react-router-dom";

export default function Singlepage() {
  return (
    <>
      <Header />
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item active">Single Page</li>
      </ol>
      <Ab3 />
      <Ab2 />
      <Brand />
      <Footer />
    </>
  );
}
