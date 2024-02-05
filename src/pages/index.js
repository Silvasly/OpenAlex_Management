
import logo from './images/OpenAlex.png';
import React from "react";


const Homes = ({ onSignIn, onRegister }) => {
  return (
    <>
      <div className="div">
        <div className="div-2">
          Welcome,
          <br />
          Lorem ipsum
          <br />
        </div>
		<div className="Lorem">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut quam at arcu porttitor volutpat. In imperdiet ante non neque tempus, vitae laoreet magna hendrerit. Suspendisse in tellus hendreri
		</div>
        <div className="div-3">
          <button className="div-4" onClick={onRegister}>Create an Account</button>
          <button className="div-5" onClick={onSignIn} >
            <div className="div-6">Log in</div>
            <div className="div-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e85dbbe9717c5beeb2dcd581ad49b75ba5c363e437c2974b19df050eccd7dd2?"
                className="img"
              />
            </div>
          </button>
        </div>
        <div className="div-8">
          <div className="div-9">
            <img
              loading="lazy"
              src={logo}
              className="OpenAlex"
			  alt=""
            />
            <div className="div-10">

              <div className="div-12">
			  	<div className="div-11-1">
				  <div className="div-11">Contact us</div>
                </div>
                <div className="div-13">
                  <div className="div-14">Enterprise</div>
                  <div className="div-15">Personalize</div>
                </div>
                <div className="div-16">
                  <div className="div-17">Careers</div>
                  <div className="div-18">Open Positions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-19">
          <div className="div-20">© Copyright 2024. All rights reserved.</div>
          <div className="div-21">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce83b6b23902108e0881ee5031345f8a7798edda70f92647ac7d878dc6a9477?"
              className="img-3"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0fc0ca383a173bd3792b370e3f667f8fd0f10ee4c4dcc7d195a4662aa89560c?"
              className="img-4"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c999a8e93f14f3d920ecfda0d0c27501fa4ef27c5faea2c59ce60679221eda?"
              className="img-5"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background: linear-gradient(
              182deg,
              #8275d3 -0.2%,
              rgba(255, 255, 255, 0) 98.25%
            ),
            #d2dae9;
          display: flex;
          padding-bottom: 15px;
          flex-direction: column;
          max-width: 100%;
          max-height: 100%;
        }
        .div-2 {
          color: #f2f2f2;
          text-align: center;
          align-self: center;
          margin-top: 109px;
          width: 846px;
          max-width: 100%;
          max-height: 100%;
          padding: 0 20px 35px;
          font: 600 64px/72px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            max-height: 100%;
            font-size: 40px;
            line-height: 50px;
            margin-top: 40px;
          }
        }
		.Lorem{
			text-align: center;
			align-self: center;
			color: #787d82;
			text-align: center;
			max-width: 829px;
			font: 400 18px/28px Inter, -apple-system, Roboto, Helvetica,
			  sans-serif;
		}
        .div-3 {
          align-self: center;
          display: flex;
          margin-top: 57px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            margin-top: 40px;
          }
        }
        .div-4 {
          color: #fff;
          text-align: center;
          white-space: nowrap;
          justify-content: center;
          border-radius: 4px;
          background-color: #4328eb;
          flex-grow: 1;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          padding: 16px 32px;
          font: 500 18px/133% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
            &:hover {
              transition: all 0.2s ease-in-out;
              background: #201564;
              color: #9B9B9B;
          }
        }
        @media (max-width: 991px) {
          .div-4 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-5 {
          background-color: Transparent;
          justify-content: center;
          align-items: center;
          align-self: center;
          display: flex;
          gap: 12px;
          border: none;
          outline: none;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s ease-in-out;
          text-decoration: none;
          margin: auto 0;
          padding: 0 20px;

        }
        .div-6 {
          color: #4328eb;
          margin: auto 0;
          font: 500 18px/133% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
            &:hover {
              transition: all 0.2s ease-in-out;
              color: #131213;
          }
        }
        .div-7 {
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          background-color: rgba(213, 207, 250, 0.5);
          align-self: stretch;
          display: flex;
          aspect-ratio: 1;
          flex-direction: column;
          width: 28px;
          height: 28px;
          padding: 0 6px;
          &:hover {
            transition: all 0.2s ease-in-out;
            background: rgba(208.03, 205.16, 225.66, 0.16);
        }
        }
        .img {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .div-8 {
          background-color: #e9ebf5;
          display: flex;
          overflow: hidden;
          margin-top: 230px;
          width: 100%;
          height: 100%;
          
          max-width: 100%;
          max-height: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 24px 0px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            max-height: 100%;
            margin-top: 40px;
            padding: 0 0px;
          }
        }
        .div-9 {
          justify-content: space-between;
          align-items: start;
          display: flex;
          padding-right: 10px;
          gap: 20px;
          margin: 0 15px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
            max-height: 100%;
            margin-right: 10px;
            flex-wrap: wrap;
          }
        }
        .OpenAlex {
          aspect-ratio: 3.61;
		  margin-top: 15px;
          object-fit: contain;
          object-position: center;
          width: 271px;
          overflow: hidden;
          max-width: 100%;
          max-height: 100%;
        }
        .div-10 {
          align-items: start;
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
		.div-11-1 {
			justify-content: center;
			display: flex;
			flex-grow: 1;
			flex-basis: 0%;
			flex-direction: column;
		  }
        .div-11 {
          color: #36485c;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-12 {
          align-self: stretch;
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }
        .div-13 {
          justify-content: center;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-14 {
          color: #36485c;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-15 {
          color: #36485c;
          margin-top: 32px;
          font: 500 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-16 {
			justify-content: center;
			display: flex;
			flex-grow: 1;
			flex-basis: 0%;
			flex-direction: column
        }
        .div-17 {
          color: #36485c;
		  margin-bottom: 15px;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-18 {
          color: #36485c;

          font: 500 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-19 {
          justify-content: space-between;
          align-self: center;
          display: flex;
          margin-top: 25px;
          width: 100%;
          height: 100%;
          overflow: hidden;
          gap: 20px;
          padding: 0 0px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
            height: 100%;
            flex-wrap: wrap;
          }
        }
        .div-20 {
          color: #5f7896;
          flex-grow: 1;
          flex-basis: auto;
          font: 500 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-21 {
          align-self: center;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        .img-3 {
          aspect-ratio: 0.95;
          object-fit: contain;
          object-position: center;
          width: 19px;
          overflow: hidden;
          max-height: 100%;
          max-width: 100%;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          overflow: hidden;
          max-height: 100%;
          max-width: 100%;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          overflow: hidden;
          max-height: 100%;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

  export default Homes;
  
