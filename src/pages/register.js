
import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm({onClose}) {
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
            <h2 className="title">Register</h2>
            <p className="subtitle">Please insert all of the option to go:</p>
            <input type="text" className="username" placeholder="test_user" />
            <input type="email" className="email-input" placeholder="test@gmail.com" />
            <input type="password" className="password-input" placeholder="Password" />
            <button className="register-button" onClick={handleLoginClick}>Register</button>
            <p className="login">Have an account? <span className="login-link">Login</span></p>
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
        .email-input, .username, .password-input {
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
        .register-button {
          border-radius: 4px;
          background-color: #DDB31D;
          align-self: center;
          border: none;
          outline: none;
          cursor: pointer;
          margin-top: 33px;
          max-width: 100%;
          justify-content: center;
          align-items: start;
          color: #FFFFFF;
          white-space: nowrap;
          padding: 17px 60px;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
            &:hover {
              transition: all 0.2s ease-in-out;
              background: #403612;
              color: #9B9B9B;
          }
        }
        @media (max-width: 991px) {
          .login-button {
            white-space: initial;
            padding: 0 20px 0 29px;
          }
        }
        .login {
          color: #605bff;
          align-self: center;
          margin-top: 31px;
          white-space: nowrap;
          font: 400 16px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .login {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}
export default RegisterForm;
