import React from 'react';

function Leftimage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (<div className='container mb-5'>
    <div className='row'>
      <div className='col-6 '>
        <img src={imageURL} style={{width:'90%'}}/>
      </div>
      <div className='col-6 p-5 mt-5'>
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <div >
          <a href={tryDemo} style={{marginRight:"60px", textDecoration:"none"}}>Try Demo<i className="fa-solid fa-arrow-right-long" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
          <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i className="fa-solid fa-arrow-right-long" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
        </div>
        <div className='mt-3'>
        <a href={googlePlay} style={{marginRight:"10px"}}><img src='Media\googlePlayBadge.svg'></img></a>
        <a href={appStore}><img src='Media\appstoreBadge.svg'></img></a>
        </div>
      </div>
    </div>
  </div>);
}

export default Leftimage;
