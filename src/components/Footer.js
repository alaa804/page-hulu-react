import React,{ Fragment } from 'react';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import youtube from '../img/youtube.svg';
import instagram from '../img/instagram.svg';


const Footer = () => {
    return (
     <Fragment>
        <footer id='footer' className='footer'>
        <div className='footer-container'>
          <div className='footer-lists'>
            <ul>
              <li className="list-head">BROWSE</li>
              <li><a href="#!">Streaming Library</a></li>
              <li><a href="#!">Live TV</a></li>
              <li><a href="#!">Live News</a></li>
              <li><a href="#!">Live Sports</a></li>
            </ul>
            <ul>
              <li><a href="#!">TV Shows</a></li>
              <li><a href="#!">Movies</a></li>
              <li><a href="#!">Originals</a></li>
              <li><a href="#!">Networks</a></li>
              <li><a href="#!">Kids</a></li>
              <li><a href="#!">FX on Hulu</a></li>
            </ul>
            <ul>
              <li><a href="#!">Hulu, Disney+, and ESPN+</a></li>
              <li><a href="#!">Disney Bundle</a></li>
              <li><a href="#!">HBO Max</a></li>
              <li><a href="#!">Cinimax</a></li>
              <li><a href="#!">Showtime</a></li>
              <li><a href="#!">STARZ</a></li>
            </ul>
            <ul>
              <li className="list-head">HELP</li>
              <li><a href="#!">Account & Billing</a></li>
              <li><a href="#!">Plans & Pricing</a></li>
              <li><a href="#!">Supported Devices</a></li>
              <li><a href="#!">Accesibility</a></li>
            </ul>
            <ul>
              <li className="list-head">ABOUT US</li>
              <li><a href="#!">Press </a></li>
              <li><a href="#!">Jobs</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
          <div className='divider'></div>

          <div className='social-icons'>
            <a href="#!"><img src={facebook} alt='' ></img></a>
            <a href="#!"><img src={twitter} alt='' ></img></a>
            <a href="#!"><img src={youtube} alt='' ></img></a>
            <a href="#!"><img src={instagram} alt='' ></img></a>
          </div>

        </div>
      </footer>
     </Fragment>  
      
    )
}

export default Footer
