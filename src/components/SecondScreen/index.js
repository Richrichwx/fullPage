import React from 'react';

const Screen = () => {
  return (
    <div className={'screenContainer'}>
      <div className="header">
        <div className="headerLogo">
          <img src="https://www.inx.co/static/icons/logoWhite.png" alt="" className="logo"/>
        </div>
        <div className="navBar">
          <div className="navAboutWrapper">
            <div className="navAbout">
              About Us
            </div>
          </div>
          <div className="navJoinWrapper">
            <div className="navJoin">
              Join Us
            </div>
          </div>
        </div>
      </div>
      <div className="content">
      <h1 className="textContent">Introducing the New Regulated Standard</h1>
        <div className="sectionWrapper">
          <section className="section">
            <div className="contentIcon">
            </div>
            <div className="sectionInfo">
              <span>Regulatory Oversight</span>
              <p>Built according to SEC, FINRA and EU regulations</p>
            </div>
          </section>
          <section className="section">
            <div className="contentIcon">
            </div>
            <div className="sectionInfo">
              <span>World-Class Safety</span>
              <p>The highest security standards to ensure funds are protected</p>
            </div>
          </section>
          <section className="section">
            <div className="contentIcon">
            </div>
            <div className="sectionInfo">
              <span>A Broad Crypto Trading Offering</span>
              <p>Aiming to establish a spot trading suite for cryptocurrencies and security tokens</p>
            </div>
          </section>
        </div>
    </div>
    </div>
  )
};

export default Screen;