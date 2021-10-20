import React from 'react'
import './prothree.css'
import mainimage2 from './Images/mainimage2.png'

export default function ProThree() {
    return (
        <>



             <section className="hero is-small is-white">
            <div className="hero-body">
            <nav class="navbar" role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" class="navbar-menu has-background-light">
                    <div class="navbar-start">
                    <a class="navbar-item has-text-red">
                        Overview
                    </a>
                    <a class="navbar-item has-text-red">
                        Tech Specs
                    </a>
                    <a class="navbar-item has-text-red">
                        Features
                    </a>
                    <a class="navbar-item has-text-red">
                        Outputs
                    </a>
                    <a class="navbar-item has-text-red">
                        Playloads
                    </a>
                    <a class="navbar-item has-text-red">
                        GCS
                    </a>
                    <a class="navbar-item has-text-red">
                        Applications
                    </a>
                    <a class="navbar-item has-text-red">
                        FAQs
                    </a>
                    <a class="navbar-item has-text-red">
                        Downloads
                    </a>
                  

                    </div>
                </div>
            </nav>
            <div className="container">
                <h1 className="compthree-overview-head">Overview</h1>
                <p className="compthree-overview-para">
                Trendius &reg; CMX is an advanced wireless condition monitor designed for high performance with precision in harsh indusrtial environment. It detects equipment anomalies and incipient failures preventing unplanned downtime, reducing maintenance costs and improving productivity

                </p>
                <img className="compthree-overview-image"src={mainimage2} alt="" srcset="" />
            </div>



            </div>
            </section>
        </>
    );
}

            
 