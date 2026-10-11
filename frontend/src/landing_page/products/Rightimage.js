import React from 'react';

function Rightimage({productName, productDescription, imageURL, learnMore}) {
  return(<div className='container'>
    <div className='row'>
      <div className='col-6 mt-5 p-5'>
        <h1 className='mt-5'>{productName}</h1>
        <p>{productDescription}</p>
        <a href={learnMore} style={{textDecoration:"none"}}>Learn More<i className="fa-solid fa-arrow-right-long" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
      </div>
      <div className='col-6'>
        <img src={imageURL} style={{width:"100%"}}></img>
      </div>
    </div>
  </div>);
}

export default Rightimage;
