import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iRepairTechShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link" to="/">Inicio</Link>
                        <Link className="nav-link" to="/phones">Celulares</Link>
                        <Link className="nav-link" to="/services">Servicios</Link>
                        <Link className="nav-link" to="/contact">Contacto</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
