import React from 'react';

function Awards() {
    return ( <div className='container mb-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='Media/largestBroker.svg'></img>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Largest Stock Broker In India</h1>
                <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
            <div className='row mb-5'>
                <div className='col-6'>
                    <ul>
                        <li>Futures and Options</li>
                        <li>Stocks &amp; IPOs</li>
                        <li>Commodity derivatives</li>
                    </ul>
                </div>
                <div className='col-6'>
                <ul>
  
                    <li>Direct mutual funds</li>
                    <li>Currency derivatives</li>
                    <li>Bonds and Government securities</li>
                </ul>
                </div>
            </div>
            <img src='Media/pressLogos.png' style={{width:"80%"}}></img>
            </div>
        </div>
    </div> );
}

export default Awards;