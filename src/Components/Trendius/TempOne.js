import React from 'react'
import './trendius.css'
import firstone from './Images/firstone.png'


export default function TempOne(props) {
    

    return (
        <>
            <div className="columns">
                
                <div className="column  container">
                    <h1>Get back to growth with the world’s #1 CRM, powered by Customer 360.</h1>
                    <p>BPCL uses Salesforce Customer 360 to deliver seamless customer experiences across six business units and multiple touchpoints. <a href="/"> See how &gt;</a> </p>
                  

                <button className="button is-info is-hovered" style={{margin:'10px'}}>START MY FREE TRIAL</button>
                <button className="button is-success is-hovered" style={{margin:'10px'}}>WATCH DEMOS</button>


                </div>
                <div className="column mgt-small">
                   

                    <img src={firstone} alt="logo"  />
                </div>
            </div>
            
        </>
    );
}
