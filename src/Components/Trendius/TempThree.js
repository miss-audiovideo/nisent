import React from 'react'
import './trendius.css'
import mar from "./Images/mar.png"
import sal from "./Images/sal.png"
import ser from "./Images/ser.png"
import comm from "./Images/comm.png"

export default function TempThree() {
    return (
        <div>
            <div>
                    <h1>See the world through your customers’ eyes.</h1>
                    <p className="container">Get a single, shared view of your customers. With knowledge of your customers’ history, interests, and even frustrations, you can begin to serve up experiences better tailored to their needs and elevate how they see your brand.</p>

            

                    <div className="columns">
                        {/* one of four */}
                        
                        <div className="column  container">
                        <img className="imgMargin" src={mar} alt="Marketing"/>
                        <h2>Marketing</h2>
                                
                        </div>
                        {/* two of four */}
                        <div className="column mgt-small"><img className="imgMargin" src={sal} alt="Sales "/>
                        <h2>Sales</h2>
                        </div>
                        {/* three of four */}

                        <div className="column mgt-small"><img className="imgMargin" src={comm} alt="Commerce "/>
                        <h2>Commerce</h2>
                        
                        </div>
                        {/* four of four */}

                        <div className="column mgt-small"><img className="imgMargin" src={ser} alt="Service"/>
                        <h2>Service</h2>
                             
                        
                        </div>
                    </div>
                </div>

            
        </div>
    );
}
