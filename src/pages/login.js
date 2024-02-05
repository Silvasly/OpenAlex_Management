
import facebook from './images/facebook.png';
import google from './images/google.png';
import apple from './images/apple.png';
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({onClose}) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Perform your login logic here
    // If login is successful, redirect and close the modal
    navigate('/manages', {replace: true});
    onClose();
  };
  return (
    <>
        <div className="modal-content">
          <div className="login-form">
            <h2 className="title">Log in</h2>
            <p className="subtitle">Please insert all the option to go:</p>
            <input type="email" className="email-input" placeholder="test@gmail.com" />
            <input type="password" className="password-input" placeholder="Password" />
            <p className="or">Or continue with</p>
            <div className="social-login">
              <button className="social-button google">            
                <img
                  loading="lazy"
                  src={google}
                  className="google"
                  alt=""
                  />
              </button>
              <button className="social-button facebook">
              <img
                  loading="lazy"
                  src={facebook}
                  className="facebook"
                  alt=""
                  />
              </button>
              <button className="social-button apple">
              <img
                  loading="lazy"
                  src={apple}
                  className="apple"
                  alt=""
                  />
              </button>
            </div>
            <button className="login-button" onClick={handleLoginClick}>Login</button>
            <p className="register">Don’t have an account? <span className="register-link">Register</span></p>
          </div>
        </div>
      <style jsx>{`
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      
      .modal-content {

        border-radius: 4px;
        width: 100%;
        max-width: 500px;
      }
        .login-form {
          justify-content: center;
          border-radius: 4px;
          box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
          background-color: #f7f6ff;
          display: flex;
          max-width: 515px;
          flex-direction: column;
          padding: 50px 59px;
        }
        @media (max-width: 991px) {
          .login-form {
            padding: 0 20px;
          }
        }
        .title {
          color: #1f0808;
          font: 700 30px Inter, sans-serif;
        }
        .subtitle {
          color: #171111;
          font: 400 18px IBM Plex Serif, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .email-input, .password-input {
          border-radius: 10px;
          border: 1px solid #8ac0ff;
          background-color: #fff;
          margin-top: 12px;
          color: #000;
          white-space: nowrap;
          padding: 23px 33px;
          font: 400 16px IBM Plex Serif, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .email-input, .password-input {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .or {
          color: #4f4f4f;
          align-self: start;
          margin-top: 33px;
          font: 400 16px Inter, sans-serif;
        }
        .social-login {
          align-self: center;
          display: flex;
          margin-top: 29px;
          width: 100%;
          max-width: 360px;
          justify-content: space-between;
          gap: 20px;
        }
        .social-button {
          border-radius: 4px;
          background-color: #f7f6ff;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          border: none;
          outline: none;
          cursor: pointer;
          justify-content: center;
          align-items: center;
          padding: 12px 35px;
        }
        @media (max-width: 991px) {
          .social-button {
            padding: 0 20px;
          }
        }
        .login-button {
          border-radius: 4px;
          background-color: #d9e4ff;
          align-self: center;
          margin-top: 33px;
          border: none;
          outline: none;
          cursor: pointer;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          color: #1e5eff;
          white-space: nowrap;
          padding: 17px 60px;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
            &:hover {
              transition: all 0.2s ease-in-out;
              background: #201564;
              color: #9B9B9B;
          }
        }
        @media (max-width: 991px) {
          .login-button {
            white-space: initial;
            padding: 0 20px 0 29px;
          }
        }
        .register {
          color: #605bff;
          align-self: center;
          margin-top: 31px;
          white-space: nowrap;
          font: 400 16px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .register {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}
export default LoginForm;
