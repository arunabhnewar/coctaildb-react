import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="nav-menu sticky-lg-top">

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a className="navbar-brand brand-name fw-bold fs-3 ms-5" href="#coctaildb">coctaildb</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link text-success fw-bold fs-6" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-success fw-bold fs-6" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-success fw-bold fs-6" href="#recipe">Recipe</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link text-success fw-bold fs-6" href="#pricing">Pricing</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success me-5 fw-bold" type="submit">Log in</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;