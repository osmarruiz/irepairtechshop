import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
<footer className="text-center text-lg-start bg-dark">
  <div className="container d-flex justify-content-center py-5">
    <button type="button" className="btn btn-danger btn-lg rounded-circle mx-2" style={{width: "60px", height: "60px"}}>
      <i className="fab fa-facebook-f"></i>
    </button>
    <button type="button" className="btn btn-danger btn-lg rounded-circle mx-2" style={{width: "60px", height: "60px"}}>
      <i className="fab fa-youtube"></i>
    </button>
    <button type="button" className="btn btn-danger btn-lg rounded-circle mx-2" style={{width: "60px", height: "60px"}}>
      <i className="fab fa-instagram"></i>
    </button>
    <button type="button" className="btn btn-danger btn-lg rounded-circle mx-2" style={{width: "60px", height: "60px"}}>
      <i className="fab fa-twitter"></i>
    </button>
  </div>

  <div className="text-center text-white p-3 bg-dark">
    © 2023 Copyright:
    <Link className="text-white" to="/irepairtechshop/"> irepairtechshop.com</Link>
  </div>
</footer>


  );
}

export default Footer;