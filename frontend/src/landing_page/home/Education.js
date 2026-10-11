import React from 'react';

function Education() {
    return ( <div className='container mb-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img style={{width:"90%"}} src='Media/education.svg'></img>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right-long" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
                 <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long" style={{ color: 'rgb(0, 0, 0)' }}></i></a>
            </div>
        </div>
    </div> );
}

export default Education;