import React from 'react';

function Brokerage() {
  return (
    <div className='container '>
      <div className='row mb-5 border-bottom '>
        <h1 className='text-center fs-2 p-2 mt-4  '>Pricing</h1>
        <p className='text-center text-muted fs-4 mb-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
      </div>
      <div className='row text-center border-bottom mb-5'>
        <div className='col-4 p-5 '>
          <img src='Media/pricingEquity.svg'></img>
          <h1>Free equity delivery</h1>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-5 '>
          <img src='Media/intradayTrades.svg'></img>
          <h1>Intraday and F&O trades</h1>
          <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
        </div>
        <div className='col-4 p-5'>
          <img src='Media/pricingEquity.svg'></img>
          <h1>Free direct MF</h1>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commission.</p>
        </div>
      </div>



    </div>
  );
}

export default Brokerage;
