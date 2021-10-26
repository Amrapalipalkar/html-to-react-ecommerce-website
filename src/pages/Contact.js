
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Header />
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item active">Contact</li>
      </ol>
      <Footer />
    </>
  );
}
