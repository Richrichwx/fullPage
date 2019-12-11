import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';
import settings from '../../assets/icons8-settings.svg';

const SecondPage = () => {
  return (
    <ReactFullpage
      scrollOverflow={ true }
      sectionsColor={ ['white', '#0e2862',"white"] }
      render={ () => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <h3>First page</h3>
            </div>
            <div className="section fp-auto-height">
              <div className="screenContainer">
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
                <div className="contentContainer">
                  <div className="content">
                    <h1 className="animated textContent">Introducing the New Regulated Standard</h1>
                    <div className="animatedSection sectionWrapper">
                      <div className="sectionScreen">
                        <img src={settings} alt=""/>
                        <div className="sectionInfo">
                          <span>Regulatory Oversight</span>
                          <p>Built according to SEC, FINRA and EU regulations</p>
                        </div>
                      </div>
                      <div className="sectionScreen">
                        <img src={settings} alt=""/>
                        <div className="sectionInfo">
                          <span>World-Class Safety</span>
                          <p>The highest security standards to ensure funds are protected</p>
                        </div>
                      </div>
                      <div className="sectionScreen">
                        <img src={settings} alt=""/>
                        <div className="sectionInfo">
                          <span>A Broad Crypto Trading Offering</span>
                          <p>Aiming to establish a spot trading suite for cryptocurrencies and security tokens</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chartImage"></div>
                </div>
              </div>
            </div>
            <div className="section">
              <h3>Three page</h3>
            </div>
          </div>
        );
      } }
    />
  );
};

export default SecondPage;