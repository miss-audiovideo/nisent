import React from 'react'
import './trendius.css'
import img1 from "./Images/crm.png";
import img2 from "./Images/gsb.png";
import img3 from "./Images/sf.png";

export default function TempTwo() {
    return (
            <>
                <div>
                    <h1>Learn what Salesforce can do for you.</h1>

            

                    <div className="columns">
                        {/* one of three */}
                        
                        <div className="column  container">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img1} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">What is CRM ?</p>
                                            </div>
                                        </div>

                                        <div className="content"><p>
                                        CRM stands for Customer Relationship Management.   
                                        </p>
                                      
                                        </div>
                                        <h4>LEARN MORE &gt;</h4>
                                    </div>
                                </div>
                        </div>
                        {/* two of three */}
                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img2} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">Grow your small business</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                        <p>
                                        Find,win,and keep more customers using the small busuness plateform that grows with you.
                                        </p>
                                        </div>
                                        <h4>LEARN MORE &gt;</h4>
                                    </div>
                                </div>
                        
                        </div>
                        {/* three of three */}

                        <div className="column mgt-small">
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                        <img src={img3} alt="Placeholder"/>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">                                       
                                            <div className="media-content">
                                                <p className="title is-4">What is Salesforce?</p>
                                            </div>
                                        </div>

                                        <div className="content">
                                            <p>
                                                The #1 CRM can unite aa your teams and drive growth.

                                            </p> 
                                        </div>
                                        <h4>SEE HOW &gt;</h4>
                                    </div>
                                </div>
                        
                        </div>
                    </div>
                </div>

                
            
        </>
    );
}
