import { NavLink } from "react-router-dom";

export const HomePage =
    <>
        <div className="container-xxl py-5 destination">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Destination</h6>
                    <h1 className="mb-5">Popular Destination</h1>
                </div>
                <div className="row g-3">
                    <div className="col-lg-7 col-md-6">
                        <div className="row g-3">
                            <div className="col-lg-12 col-md-12">
                                <NavLink to="" className="position-relative d-block overflow-hidden">
                                    <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Thailand</div>
                                </NavLink>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Malaysia</div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <NavLink to="" className="position-relative d-block overflow-hidden">
                                    <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Australia</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <NavLink to="" className="position-relative d-block h-100 overflow-hidden">
                            <img className="img-fluid position-absolute w-100 h-100" src="img/destination-4.jpg" alt="" />
                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Indonesia</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>