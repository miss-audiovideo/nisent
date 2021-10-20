import React from 'react'
import cs1 from "./Images/cs1.png"
import cs2 from "./Images/cs2.png"
import cs3 from "./Images/cs3.png"
import cs4 from "./Images/cs4.png"
import './trendius.css'

export default function TempThree() {
    return (
        <div>
            <div>
                    <h1>Our customers tell the best stories..</h1>
                    <p></p>

            

                    <div className="columns">
                        {/* one of four */}
                        
                        <div className="column  container">
                        <img className="imgMargin" src={cs1} alt="Marketing"/>
                        <h2>Shetal Kothari</h2>
                        <p>Vice-President, Digital Marketing <br/>IDFC Asset Management Companr Limited </p>
                        <button className="button is-primary is-outlined">SEE THE STROY</button>
                        <h4>FINANCIAL SERVICES</h4>
                                
                        </div>
                        {/* two of four */}
                        <div className="column mgt-small"><img className="imgMargin" src={cs2} alt="Sales"/>
                        <h2>Rajiv Shah</h2>
                        <p>Chief Executive officer,<br/>NGA-SCE</p>
                        <button className="button is-primary is-outlined">SEE THE STROY</button>
                        <h4>HIGHER EDUCATION</h4>
                        </div>
                      {/* three of four */}

                        <div className="column mgt-small"><img className="imgMargin" src={cs3} alt="Commerce"/>
                        <h2>Ritesh Arora</h2>
                        <p>Chieg Digital Officer,<br/>CEAT Ltd</p>
                        <button className="button is-primary is-outlined">SEE THE STROY</button>
                        <h4>MANUFACTURING</h4>
                        
                        </div>
                        {/* four of four */}

                        <div className="column mgt-small"><img className="imgMargin" src={cs4} alt="Service"/>
                        <h2>Sandeep Nayar</h2>
                        <p>Director,Customer Support Operation,GEP</p>
                        <button className="button is-primary is-outlined">SEE THE STROY</button>
                        <h4>HIGH-TECH</h4>
                             
                        
                        </div>
                    </div>
                    <h4>VIEW ALL CUSTOMER &gt;</h4>
                </div>

            
        </div>
    );
}
