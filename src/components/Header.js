import React,{ useState , Fragment } from 'react';
import Modal from "react-modal";
import ModalForm from './ModalForm';
import logo from '../img/logo.png';


const customStyles = {
    content: {
     backgroundColor:"transparent",
     width:"0%",
     height:"0%",
    },
  };
  Modal.setAppElement("#root");



const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

 const openModal = () => {
    setIsOpen(true);
  }

const closeModal = () => {
    setIsOpen(false);
  }


    return (
        <Fragment>
         <header className='header'>
        <nav>
            <ul>
              <li>
                <button onClick={openModal} className='login-btn'>Log In</button>
                <Modal isOpen={modalIsOpen} style={customStyles}  onRequestClose={closeModal}>
                     <ModalForm toggleModal={closeModal}  /> 
                </Modal> 
              </li>
            </ul>
        </nav>
        <div className="header-content">
            <h4>Try up to one month free</h4>
            <img src={logo} alt="Hulu" className="logo" />
            <div className="header-text-1">Watch thousands of TV shows and movies.</div>
            <div className="header-text-2">
              HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
            </div>
            <button className="btn btn-cta">Start Your Free Trial</button>
            <div className="legal-text">
              Free trial for new & eligible returning subscribers only.
            </div>
          </div>
    </header>
    </Fragment>
    )
}

export default Header
