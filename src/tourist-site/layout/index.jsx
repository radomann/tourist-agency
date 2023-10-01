import "../assets/style.css"
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout =
    <>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i>Tourist-site</h1>
                    {/* <img src="img/logo.png" alt="Logo">  */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink to="/" className="nav-item nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="nav-item nav-link">
                            About
                        </NavLink>
                        {/* <NavLink to="/single" className="nav-item nav-link">
                            Single
                        </NavLink> */}
                        {/* TODO fix if is single page to be active Home nav */}
                        <NavLink to="/about" className="nav-item nav-link">
                            Contact
                        </NavLink>
                    </div>
                    {/* TODO user photo recive, hidde this if is not logedin */}
                    {/* TODO fix user photo only exist on Home page */}
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link" data-bs-toggle="dropdown">
                            <img src="img/team-4.jpg" className="rounded-circle" style={{width: "30px"}} alt="" />
                        </NavLink>
                        <div className="dropdown-menu m-0">
                            <NavLink to="/profil" className="dropdown-item">Profil edit</NavLink>
                            <NavLink to="#" className="dropdown-item">My reservation</NavLink>
                            <NavLink to="/logout" className="dropdown-item">Logout</NavLink>
                        </div>
                    </div>
                    {/* TODO handle if iz login to logout, if is not login to regiser or login */}
                    <NavLink to="/login" className="btn btn-primary rounded-pill py-2 px-4">
                        Sign in / Sign up
                    </NavLink>
                    </div>
            </nav>
        </div>
        <Outlet />
    </>