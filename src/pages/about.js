
import logo from './images/OpenAlex.png';
import React from "react";


function Abouts(props) {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet = {logo}
          className="img"
        />
        <div className="div-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          quam at arcu porttitor volutpat. In imperdiet ante non neque tempus,
          vitae laoreet magna hendrerit. Suspendisse in tellus hendreri
          <br />
          <br />
        </div>
        <div className="div-3">
          <div className="div-4">© Copyright 2024. All rights reserved.</div>
          <div className="div-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95eea2b2580b5d666749fc9e7472ccc0e64028d5398a978a57c38e43497d79b0?"
              className="img-2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/628907ee84a9fbc7a0e11362f9d1fdf33ad5394aa889333090528e914673e62d?"
              className="img-3"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c999a8e93f14f3d920ecfda0d0c27501fa4ef27c5faea2c59ce60679221eda?"
              className="img-4"
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
          align-items: center;
        }
        .img {
          aspect-ratio: 4.57;
          object-fit: auto;
          object-position: center;
          width: 810px;
          justify-content: flex-end;
          align-items: center;
          margin-top: 34px;
          max-width: 100%;
        }
        .div-2 {
          color: #707274;
          text-align: center;
          margin-top: 33px;
          width: 846px;
          font: 500 32px/28px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          justify-content: space-between;
          display: flex;
          margin-top: 492px;
          width: 100%;
          max-width: 1280px;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          color: #5f7896;
          flex-grow: 1;
          flex-basis: auto;
          font: 500 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-5 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        .img-2 {
          aspect-ratio: 0.95;
          object-fit: auto;
          object-position: center;
          width: 19px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
      `}</style>
    </>
  );
}

export default Abouts;
