import React from 'react';


function Hero() {
  return (
    <section className='container-fluid' id='supportHero'>
      <div className='px-5 py-4' id='supportWrapper'>
        <h4 className='mb-3'>Support Portal</h4>
        <a className='mb-3' href=''>Track Tickets</a>
      </div>
      <div className='row px-5 pb-5 pt-3' >
        <div className='col-6 p-5  ' >
        <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
        <input className='p-2 mb-4' placeholder='how do i activate F&O, why is my order getting rejected..'/>
        <br/>
        <a className='me-4' href=''>Track account opening </a>
        <a className='me-4' href=''>Track segment activation </a>
       <a className='me-4' href=''> Intraday margins </a>
        <a className='me-4' href=''>Kite user manual </a>
        </div>
        <div className='col-6 p-5 ' >
        <h1 className='fs-3 mb-4'>Featured</h1>
        <ol>
        <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
        <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
        </ol>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
