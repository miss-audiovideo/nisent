import React from 'react'
import './protwo.css'
import feature1 from './Images/feature1.png'
import feature3 from './Images/feature3.png'
import feature4 from './Images/feature4.png'
import feature5 from './Images/feature5.png'
import feature6 from './Images/feature6.png'


export default function ProTwo() {
    return (
        <>


        <section className="hero is-small is-black">
            <div className="hero-body">
        <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature1} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Comprehensive health plans</p>
                        </article>
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature3} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Paid volunteer time</p>
                        </article>
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature1} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Healthy food and snacks</p>
                        </article>
                        
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"className="photo-circle" src={feature3} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Generous parental and family leave</p>
                        </article>
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature4} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Learning and development</p>
                        </article>
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature5} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Annual travel and experiences credit</p>
                        </article>
                        <article className="tile is-child ">
                        <p className="title">
                            <img  className="photo-circle"src={feature6} alt="" srcset="" />
                        </p>
                        <p className="subtitle">Annual travel and experiences credit</p>
                        </article>
                    </div>
                </div>
                </div>
                </section>
            
        </>
    );
}

            

