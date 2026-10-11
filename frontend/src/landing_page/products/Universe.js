import React from 'react';
import './Universe.css';

const partners = [
  ['Media/smallcaseLogo.png', 'smallcase', 'Thematic investment platform'],
  ['Media/streakLogo.png', 'Streak', 'Algo & strategy platform'],
  ['Media/sensibullLogo.svg', 'Sensibull', 'Options trading platform'],
  ['Media/zerodhaFundhouse.png', 'Zerodha Fund House', 'Asset management'],
  ['Media/goldenpiLogo.png', 'GoldenPi', 'Bonds trading platform'],
  ['Media/dittoLogo.png', 'Ditto', 'Insurance platform'],
];

function Universe() {
  return (
    <section className="container universe text-center">
      <h1>The Zerodha Universe</h1>
      <p className="universe-intro">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row g-5 universe-partners">
        {partners.map(([logo, name, description]) => (
          <div className="col-12 col-md-4" key={name}>
            <div className="universe-partner">
              <img className="universe-logo" src={logo} alt={name} />
              <p className="universe-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Universe;
