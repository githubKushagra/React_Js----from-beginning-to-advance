import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  {props.homePage}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutPage}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}



// in this we are specifying the data types of props like for title string should be there like that
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homePage: PropTypes.string.isRequired,
    aboutPage: PropTypes.string.isRequired
}


// defaultProps means if we haven't send any props/attributes just like we have sent title , homePage , title Page... and if we haven't sent these then by default the values of title , homePage , titlePage will be these values that we have written over there
Navbar.defaultProps = {
    title: 'Set title here using props...',
    homePage: 'Set home page here...',
    aboutPage: 'Set about page here...'
}