import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar bg-dark sticky-top" data-bs-theme="dark">
        <div className="container">
          <div className=" d-flex gap-5 align-items-center">
            <div className="">
              <Link to="/" className="navbar-brand fs-4  text-primary">
                Blue Star
              </Link>
            </div>
            <div className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `
                  navbar-brand fs-6
                  ${isActive ? "text-primary" : "text-light"}
                  `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `
                  navbar-brand fs-6
                  ${isActive ? "text-primary" : "text-light"}
                  `
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `
                  navbar-brand fs-6
                  ${isActive ? "text-primary" : "text-light"}
                  `
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `
                  navbar-brand fs-6
                  ${isActive ? "text-primary" : "text-light"}
                  `
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `
                  navbar-brand fs-6
                  ${isActive ? "text-primary" : "text-light"}
                  `
                }
              >
                Github
              </NavLink>
            </div>
            </div>

          <div className="">
            <button type="button" class="btn btn-outline-primary">
              SignIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
