import React, { useState, useEffect } from 'react';
import './Cards.css';
import CountUp from 'react-countup'

function Cards( { data: {confirmed, recovered, deaths, lastUpdate}, selectedCountry } ) {

    if(!confirmed || !recovered || !deaths || !lastUpdate){
        return 'Loading....'
    }
    
    return (
        <div className="main-container">
            <div className="card-infected">
                <div className="card-body">
                    <h3 className="card-title">Infected</h3>
                    <p className="card-text">
                        <span className="date">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />    
                        </span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ selectedCountry }</span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ new Date(lastUpdate).toDateString() }</span>
                    </p>
                    <h6 className="card-title">Number of active cases of COVID-19</h6>
                </div>
            </div>
            <div className="card-recovered">
                <div className="card-body">
                    <h3 className="card-title">Recovered</h3>
                    <p className="card-text">
                        <span className="date">
                        <CountUp start={0} end={recovered.value} duration={2.5} separator="," />    
                        </span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ selectedCountry }</span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ new Date(lastUpdate).toDateString() }</span>
                    </p>
                    <h6 className="card-title">Number of recoveries from COVID-19</h6>
                </div>
            </div>
            <div className="card-deaths">
                <div className="card-body">
                    <h3 className="card-title">Deaths</h3>
                    <p className="card-text">
                        <span className="date">
                        <CountUp start={0} end={deaths.value} duration={2.5} separator="," />    
                        </span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ selectedCountry }</span>
                    </p>
                    <p className="card-text">
                        <span className="date">{ new Date(lastUpdate).toDateString() }</span>
                    </p>
                    <h6 className="card-title">Number of deaths caused by COVID-19</h6>
                </div>
            </div>
        </div>
    )
}

export default Cards;
