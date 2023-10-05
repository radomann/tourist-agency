import { NavLink } from "react-router-dom"

export const FooterPage = () => {
   
    return  ( 
    <>
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Company</h4>
                    <NavLink className="btn btn-link" to="/">Home</NavLink>
                    <NavLink className="btn btn-link" to="/about">About Us</NavLink>
                    <NavLink className="btn btn-link" to="Contact">Contact Us</NavLink>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Podgorica, 25, Montenegro</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+382 67 067 067</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@developerlabs.com</p>
                    <div className="d-flex pt-2">
                        <NavLink className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></NavLink>
                        <NavLink className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></NavLink>
                        <NavLink className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></NavLink>
                        <NavLink className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <NavLink className="border-bottom" to="#">Tourist agency</NavLink>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}