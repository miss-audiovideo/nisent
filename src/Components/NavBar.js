import React from 'react'
import {BrowserRouter as Router , Link  } from 'react-router-dom';





export default function NavBar() {
    return (
        <>
        <Router>

                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <Link className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                            </Link>

                            <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            </Link>
                        </div>
         

                
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="/products" className="navbar-link">

                                PRODUCTS
                                
                                </Link>

                                <div className="navbar-dropdown">
                                <Link to="/products"className="navbar-item">
                                    CMX Sentinel
                                </Link>
                                <Link to="/products" className="navbar-item">
                                    CMX Stream
                                </Link>
                                
                                </div>
                            </div><div className="navbar-item has-dropdown is-hoverable">
                                <Link to="trendius" className="navbar-link">
                                Trendius
                                </Link>

                                <div className="navbar-dropdown">
                                <Link to="trendius" className="navbar-item">
                                    Predictive Analytics
                                </Link>
                                <Link to="trendius" className="navbar-item">
                                Performance Analytics
                                </Link>
                                
                                </div>
                            </div>

                            

                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="Engineering" className="navbar-link">
                                Engineering
                                </Link>

                                <div className="navbar-dropdown">
                                <Link to="Engineering" className="navbar-item">
                                    Acoustics & Pulsation
                                </Link>
                                <Link to="Engineering" className="navbar-item">
                                Vibration and Noise
                                </Link>
                                <Link to="Engineering" className="navbar-item">
                                    FMEA
                                </Link>
                                
                                <Link to="Engineering" className="navbar-item">
                                    Intergrity & Reliability
                                </Link>
                                <Link to="Engineering" className="navbar-item">
                                    Surge & Fluid Dynamics
                                </Link> 
                                <Link to="Engineering" className="navbar-item">
                                    Fitness for Services
                                </Link>
                                </div>
                            </div>


                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="/planmore" className="navbar-link">
                                PlantMORE
                                </Link>

                                <div className="navbar-dropdown">
                                <Link to="/planmore"  className="navbar-item">
                                    Turnaround
                                </Link>
                                <Link to="/planmore"  className="navbar-item">
                                Balancing & Alignment
                                </Link>
                                <Link to="/planmore"  className="navbar-item">
                                    o&M
                                </Link>
                                
                                <Link to="/planmore"  className="navbar-item">
                                    Commisioning and Startup
                                </Link>
                                <Link to="/planmore"  className="navbar-item">
                                ESP
                                </Link> 
                                <Link to="/planmore"  className="navbar-item">
                                    Field COndition monitoring
                                </Link>
                                </div>
                            </div>

                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="/prespectives"  className="navbar-link">
                                Presprctives
                                </Link>

                                <div className="navbar-dropdown">
                                <Link  to="/prespectives" className="navbar-item">
                                    Whitepaper
                                </Link>
                                <Link to="/prespectives" className="navbar-item">
                                resources
                                </Link>
                                <Link to="/prespectives" className="navbar-item">
                                    blogs
                                </Link>
                                
                                
                                </div>
                            </div>




                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link to="/company" className="navbar-link">
                            Company
                                </Link>

                                <div className="navbar-dropdown">
                                <Link to="/company" className="navbar-item">
                                    about us
                                </Link>
                                <Link to="/company" className="navbar-item">
                                leadership
                                </Link>
                                <Link className="navbar-item">
                                    policies
                                </Link>
                                
                                <Link  to="/company"className="navbar-item">
                                sustanibility
                                </Link>
                                <Link to="/company/career" className="navbar-item">
                                careers
                                </Link> 
                                </div>
                            </div>
                            </div>

                            <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                <Link to="sign-up" className="button is-primary">
                                    <strong>Sign up</strong>
                                </Link>
                                <Link to="/login-in" className="button is-light">
                                    Log in
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </nav>
            </Router>

            
        </>
    )
}
