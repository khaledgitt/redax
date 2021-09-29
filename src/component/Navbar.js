import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



const NavBar = () => {
    return (
        <div>
            <Navbar className="bar" variant="dark">
                <div className="form">
                    <div className="nav">
                        <div className="nav_link">
                            <Nav.Link className="link" >
                                <Link to="/">
                                    <i class="fas fa-home"></i>Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="link" >
                                <Link to="/movies">

                                    <i class="fas fa-film"></i>Movies
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="link" >
                                <Link to="/about">
                                    <i class="fas fa-question-circle"></i>About
                                </Link>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;