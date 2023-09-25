import React from "react";

function Ubication() {
    return (
        <div className="container">
            <br/>
            <section className="text-center">
                <h3 className="mb-5">Contactenos</h3>

                <div className="row">
                    <div className="col-lg-7">
                        <iframe title="leon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31169.898485467253!2d-86.9026784947542!3d12.433902871372405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f711f92bb8f7a77%3A0x3ab5c06f64ea313c!2zTGXDs24!5e0!3m2!1ses!2sni!4v1695595346940!5m2!1ses!2sni" className="h-100 w-100" style={{ border: 0 }} allowfullscreen="" loading="lazy"/>
                    </div>


                    <div className="col-md-5">
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                                <p><small>Leon, Nicaragua</small></p>
                            </li>
                            <li>
                                <i className="fas fa-phone fa-2x text-primary"></i>
                                <p><small>+ 01 234 567 89</small></p>
                            </li>
                            <li>
                                <i className="fas fa-envelope fa-2x text-primary"></i>
                                <p><small>contact@gmail.com</small></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <br/>
        </div>

    );
}
export default Ubication;