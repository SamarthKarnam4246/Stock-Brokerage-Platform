import React from 'react';

function Team() {
  return (
    <div className='container'>
      <div className='row mb-5'>
        <h1 className='text-center fs-2 p-5 mt-5 '>People</h1>
      </div>
      <div className='row mt-5  border-bottom' style={{fontSize:"1.2em"}}>
        <div className='col-6 p-5 text-center'>
          <img src="Media\nithinKamath.jpg" className='mb-3' style={{borderRadius:"100%", width:"60%"}}></img>
          <p>Nithin Kamath</p>
          <p className='fs-6 text-muted'>Founder, CEO</p>
        </div>
        <div className='col-6 p-5'>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>);
}

export default Team;
