
import logo from './images/OpenAlex.png';
import React from "react";

function Input(props) {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bfbd1b30a78e5443b73f33330ec4266c172136302184c9759cce88760cf987?"
              className="img"
            />
            <div className="div-4">Input table</div>
          </div>
          <div className="div-5">
            <div className="div-6">
              <div className="div-7">Go back</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc283c330a076415ebc2b75d9e656e17c02b9e1c004a1686293f2e968caf621f?"
                className="img-2"
              />
            </div>
          </div>
          <div className="div-8">
            <div className="div-9">Institution </div>
            <div className="div-10" />
            <div className="div-11">Submit file</div>
            <div className="div-12">Input file</div>
            <div className="div-13">Title</div>
            <div className="div-14">Input text</div>
            <div className="div-15">Select country</div>
            <div className="div-16">
              <div className="div-17">Dropdown Text</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a518f341132b27dcae6d4b95214f5bb9f6cdb3a37efe55472a028dc960698f81?"
                className="img-3"
              />
            </div>
            <div className="div-18">Status</div>
            <div className="div-19">
              <div className="div-20" />
              <div className="div-21">Active</div>
              <div className="div-22" />
              <div className="div-23">Inactive</div>
            </div>
            <div className="div-24">Select year</div>
            <div className="div-25">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f441f7376abe7d43ef3977f6e469697703df0166b1bb378289cd480cfa093e7?"
                className="img-4"
              />
              <div className="div-26">May 2020</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/153416ee9beecb0e685c727f81884ef7f065c03650f6a6ddaf07bc4f5f777d71?"
                className="img-5"
              />
            </div>
          </div>
          <div className="div-27">
            <div className="div-28">Are you sure, you want to submit?</div>
            <div className="div-29">Submit</div>
          </div>
          <div className="div-30">
            <div className="div-31">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67076bcaa7921711fe44cdd703e5ab1fa4637ea37096fe434cc5c425dee521e7?"
                className="img-6"
              />
              <div className="div-32">
                <div className="div-33">User</div>
                <div className="div-34">UI/UX Designer</div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76b93c449ca0f5eb5fd10e9ff0352b704e0390d1466a3bcc6bc203cc3c72dd30?"
              className="img-7"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
        }
        .div-2 {
          box-shadow: 0px 10px 60px 0px rgba(226, 236, 249, 0.5);
          background-color: #fff;
          display: flex;
          width: 100%;
          padding-top: 50px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          align-self: center;
          display: flex;
          margin-top: 5px;
          gap: 16px;
          font-size: 36px;
          color: #000;
          font-weight: 600;
          letter-spacing: 0.36px;
          padding: 0 20px;
        }
        .img {
          aspect-ratio: 1.11;
          object-fit: auto;
          object-position: center;
          width: 72px;
        }
        .div-4 {
          font-family: Poppins, sans-serif;
          align-self: end;
          margin-top: 23px;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-5 {
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: #5932ea;
          display: flex;
          margin-top: 40px;
          width: 100%;
          font-size: 24px;
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: -0.24px;
          padding: 5px 60px;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-6 {
          display: flex;
          gap: 10px;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
          }
        }
        .div-7 {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .div-7 {
            white-space: initial;
          }
        }
        .img-2 {
          aspect-ratio: 1.08;
          object-fit: auto;
          object-position: center;
          width: 28px;
          margin: auto 0;
        }
        .div-8 {
          justify-content: center;
          display: flex;
          margin-top: 30px;
          width: 100%;
          flex-direction: column;
          font-size: 20px;
          font-weight: 500;
          padding: 23px 72px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-9 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
        }
        .div-10 {
          border-radius: 4px;
          border: 1px solid #010812;
          background-color: var(--09-System-02-Input-05-Success, #fff);
          margin-top: 20px;
          height: 41px;
        }
        .div-11 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 36px;
        }
        .div-12 {
          border-radius: 4px;
          border: 1px dashed #060607;
          background-color: #fff;
          justify-content: center;
          align-items: center;
          color: #1e5eff;
          text-align: center;
          padding: 12px 60px;
          font: 400 24px/100% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            padding: 0 20px;
          }
        }
        .div-13 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 36px;
        }
        .div-14 {
          border-radius: 4px;
          border: 1px solid #4b4e52;
          background-color: #fff;
          align-items: start;
          color: #a1a7c4;
          white-space: nowrap;
          padding: 17px 60px 38px 16px;
          font: 400 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
            padding-right: 20px;
          }
        }
        .div-15 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 36px;
        }
        .div-16 {
          border-radius: 4px;
          border: 1px solid #7f858c;
          background-color: var(--09-System-02-Input-03-Active, #fff);
          display: flex;
          margin-top: 5px;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          color: #131523;
          font-weight: 400;
          line-height: 150%;
          padding: 12px 13px;
        }
        .div-17 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-top: 8px;
          flex-grow: 1;
          flex-basis: auto;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-18 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 53px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
          }
        }
        .div-19 {
          display: flex;
          margin-top: 11px;
          justify-content: space-between;
          gap: 20px;
          font-weight: 400;
          white-space: nowrap;
          line-height: 120%;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .div-20 {
          border-radius: 10px;
          border: 1px solid #d7dbec;
          background-color: #fff;
          width: 27px;
          height: 27px;
        }
        .div-21 {
          color: #0b28f8;
          font-family: Inter, sans-serif;
        }
        .div-22 {
          border-radius: 10px;
          border: 1px solid #d7dbec;
          background-color: #fff;
          width: 27px;
          height: 27px;
        }
        .div-23 {
          color: #b31010;
          font-family: Inter, sans-serif;
        }
        .div-24 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 36px;
        }
        .div-25 {
          border-radius: 4px;
          box-shadow: 0px 6px 24px 0px rgba(38, 44, 71, 0.16);
          background-color: #fff;
          display: flex;
          margin-top: 4px;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          color: #131523;
          font-weight: 700;
          text-align: center;
          line-height: 150%;
          padding: 22px 23px 13px;
        }
        @media (max-width: 991px) {
          .div-25 {
            padding: 0 20px;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 36px;
        }
        .div-26 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-top: 14px;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 36px;
        }
        .div-27 {
          border-radius: 20px;
          background: linear-gradient(108deg, #eaabf0 7.37%, #4623e9 95.19%);
          align-self: center;
          display: flex;
          margin-top: 69px;
          width: 100%;
          max-width: 402px;
          flex-direction: column;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          letter-spacing: 0.14px;
          padding: 9px 37px;
        }
        @media (max-width: 991px) {
          .div-27 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-28 {
          color: #fff;
          font-family: Poppins, sans-serif;
          align-self: center;
        }
        @media (max-width: 991px) {
          .div-28 {
            white-space: initial;
          }
        }
        .div-29 {
          font-family: Poppins, sans-serif;
          border-radius: 20px;
          box-shadow: 2px 4px 4px 0px rgba(79, 42, 234, 0.17);
          background-color: #fff;
          margin-top: 20px;
          justify-content: center;
          align-items: center;
          color: #4925e9;
          padding: 15px 60px;
        }
        @media (max-width: 991px) {
          .div-29 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-30 {
          display: flex;
          margin-top: 53px;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          font-size: 20px;
          letter-spacing: 0.2px;
          padding: 0 42px 35px;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-31 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .img-6 {
          aspect-ratio: 1.16;
          object-fit: auto;
          object-position: center;
          width: 78px;
        }
        .div-32 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          margin: auto 0;
        }
        .div-33 {
          color: #000;
          font-family: Poppins, sans-serif;
          font-weight: 500;
        }
        .div-34 {
          color: #757575;
          font-family: Poppins, sans-serif;
          font-weight: 400;
          margin-top: 16px;
        }
        .img-7 {
          aspect-ratio: 1.19;
          object-fit: auto;
          object-position: center;
          width: 44px;
          align-self: start;
        }
      `}</style>
    </>
  );
}

export default Input;
