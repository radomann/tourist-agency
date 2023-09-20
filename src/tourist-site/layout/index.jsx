import "../assets/style.css"
import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout =
    <>
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="/" className="text-primary m-0">
                    <h1 className="text-primary m-0">Tourist-site</h1>
                </NavLink>
                <div className="navbar-nav ms-auto py-0">
                    <NavLink to="/" className="nav-item nav-link active">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-item nav-link">
                        About
                    </NavLink>
                    <NavLink to="/about" className="nav-item nav-link">
                        Contact
                    </NavLink>
                </div>
                <NavLink to="/about" className="btn btn-primary rounded-pill py-2 px-4">
                    Register
                </NavLink>
            </nav>
        </div>
        <Outlet />
    </>