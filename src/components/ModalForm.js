import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import closeBtn from '../img/close.svg';


  
const ModalForm = ({  toggleModal }) => {

    return (
  <Fragment>
    <div className="modal">
      <div className="modal-box">
        <div className="modal-body">
          <h3>Log In</h3>
          <form>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <p><a href="#!">Forgot your email or password</a></p>
            <button className="btn btn-dark">Log In</button>
          </form>
        </div>
        <div className="modal-footer">
          <p>Don't have an account? <a href="#!">Start your free trial</a></p>
        </div>
          <img onClick={toggleModal} className="close" src={closeBtn} alt="close" />
      </div>
    </div>
</Fragment>

    )
}

ModalForm.propTypes = {
  toggleModal:PropTypes.func.isRequired,
}

export default ModalForm
