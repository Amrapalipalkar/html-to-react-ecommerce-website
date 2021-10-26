
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Brand from "../Components/Brand";
import { Link } from "react-router-dom";
import Blogger from "../Components/Blogger/Blogger";

export default function Blog() {
  return (
    <>
      <Header />
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item active">Blog</li>
      </ol>
      <Blogger />
      <Brand />
      <Footer />
    </>
  );
}
