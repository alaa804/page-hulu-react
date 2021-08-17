import React ,{ Fragment } from 'react';
import logo1 from '../img/live-sports-logo-1.png';
import logo2 from '../img/live-sports-logo-2.png';
import logo3 from '../img/live-sports-logo-3.svg';
import logo4 from '../img/live-sports-logo-4.png';



const LiveSports = () => {
    return (
    <Fragment>
      <section className="live-sports">
        <div className="live-sports-content">
          <div className="text-xl">Live Sports</div>
          <div className="sub-text">
            Catch your games at home or on the go. Stream live games from major
            college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
          </div>
  
          <div className="live-sports-logos">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
          </div>
  
          <div className="legal-text">
            Live TV plan required. Regional restrictions, blackouts and additional
            terms apply. See details
          </div>
        </div>
      </section>
    </Fragment>
    )
}

export default LiveSports
