import React from 'react'
import './proone.css'
import mainimage3 from './Images/mainimage3.png'
import drone1 from './Images/drone01.gif'

export default function ProOne() {
    return (
        <>

         <section class="hero is-small is-black">
            <div class="hero-body">
                <p class="title">
                    <img className="main-image" src={mainimage3} alt="" srcset="" />
                </p>
                <p class="subtitle">
                <div className="img-head-container">

                <span className="conpone-head" style={{fontFamily:"45px"}}>Trendius&reg; CMX </span>  
                </div><br />

                <div className="conpone-head2">Always Within Earshot</div>
                </p>
            </div>
            </section>
            
        </>
    )
}
