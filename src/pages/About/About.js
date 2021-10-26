
import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Brand from "../../Components/Brand";
import Blogger from "../../Components/Blogger/Blogger";
import Ab1 from "../../Components/Ab/Ab1/Ab1";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header />
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item active">About</li>
      </ol>
      <Ab1 />
      <Blogger />
      <Brand />
      <Footer />
    </>
  );
}
