
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, subMonths } from 'date-fns';

function Input({ isOpen, onSidebarClose }) {
  const sidebarRef = useRef();
  const [ fileName, setFileName ] = useState("Choose File");
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
    if (isOpen) {
      sidebarRef.current.focus();
    }
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onSidebarClose();
    }
  };

  const handleFilePick = (event) => {
    // If no file picked, reset to default
    if (!event.target.files[0]) {
      setFileName('Choose File');
      return;
    }
    // Set file name
    setFileName(event.target.files[0].name);
  }

  const handleNext = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  }
  
  const handlePrev = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  }
  return (
    <>
    {isOpen && <div className="overlay" onClick={onSidebarClose} />}
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={handleClickOutside} ref={sidebarRef} tabIndex="0">

      <div className="sidebar-content">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bfbd1b30a78e5443b73f33330ec4266c172136302184c9759cce88760cf987?"
                className="img-as"
              />
              <div className="div-4">Input table</div>
            </div>
            <button onClick={onSidebarClose} className="div-5">
              <div className="div-6">
                <div  className="div-7">Go back</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc283c330a076415ebc2b75d9e656e17c02b9e1c004a1686293f2e968caf621f?"
                  className="img-2"
                />
              </div>
            </button>
            <div className="div-8">
              <div className="div-9">Author </div>
              <input type="text" className="div-10" placeholder="Insert name.." />

              <div className="div-11">Submit file</div>
                <input type="file" name="file" style={{display: 'none'}} id="file" class="inputfile" data-multiple-caption="{count} files selected" multiple onChange={handleFilePick} />
                
                  <label for="file" className="div-12">{fileName}</label>

              <div className="div-13">Title</div>
                <textarea rows="3" cols="10" className="div-14" placeholder="Insert title... " /> 
              <div className="div-15">Select country</div>
              <select className="div-16">
                  <option selected disabled >Select country... </option>
                  <option>Country 1</option>
                  <option>Country 2</option>
               </select>

              <div className="div-18">Status</div>
              <div className="div-19">
                 <input type="radio" id="active" name="status" value="active"  className="div-20"/>
                 <label for="active" className='div-21'>Active</label>

                 <input type="radio" id="inactive" name="status" value="inactive"  className="div-22"/>
                 <label for="inactive" className='div-23'>Inactive</label>
                 
               </div>
              <div className="div-24">Select year</div>
              <div className="div-25">
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f441f7376abe7d43ef3977f6e469697703df0166b1bb378289cd480cfa093e7?"
                  className="img-4"
                /> */}

                  <button onClick={handlePrev} className="div-cursor-right">{"<"}</button>
                  <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                    className="div-26"
                    shouldCloseOnSelect={true}
                    isClearable={false}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                  <button onClick={handleNext}  className="div-cursor-left">{">"}</button>

                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/153416ee9beecb0e685c727f81884ef7f065c03650f6a6ddaf07bc4f5f777d71?"
                  className="img-5"
                /> */}
              </div>
            </div>
            <div className="div-27">
              <div className="div-28">Are you sure, you want to submit?</div>
              <button className="div-29">Submit</button>
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
        </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1000;
        }
        .sidebar {
          position: fixed;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background-color: #fff;
          overflow-x: hidden;
          transition: all 0.5s;  
          padding-left: 10px;
          padding-right: 10px;
          z-index: 1000;  
        }

        .sidebar.open {
          width: 330px;  
          left: 0;
        }
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
          padding-top: 20px;
          padding-top: 20px;
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
        .img-as {
          aspect-ratio: 1.11;
          object-fit: auto;
          object-position: center;
          width: 100%;
          max-width: 68px;
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
          border: none;
          outline: none;
          cursor: pointer;
          color: #fff;
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: -0.24px;
          padding: 5px 0px;
          box-shadow: 0 9px #999;
          &:hover {
            transition: all 0.2s ease-in-out;
            background: #201564;
            color: #9B9B9B;
          }
        }
        .div-5:active {
          background-color: #201564;
          box-shadow: 0 5px #666;
          transform: translateY(8px);
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
          padding: 23px 0px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            padding: 0 0px;
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
          margin-top: 5px;
          height: 41px;
        }
        .div-11 {
          color: #000;
          font-family: Poppins, sans-serif;
          letter-spacing: -0.2px;
          margin-top: 36px;
        }
        .div-12 {
          cursor: pointer;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border-radius: 4px;
          border: 1px dashed #060607;
          color: var(--09-System-02-Input-05-Success, #1e5eff);
          justify-content: center;
          align-items: center;
          margin-top: 5px;
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
          background-color: var(--09-System-02-Input-05-Success, #fff);
          align-items: start;
          margin-top: 5px;
          white-space: nowrap;
          resize: none;
          white-space: pre-wrap;
          line-height: 1.5;
          padding: 17px 16px 38px 16px;
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
          margin-top: 36px;
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
          justify-content: center;
          border-radius: 4px;
          box-shadow: 0px 6px 24px 0px rgba(38, 44, 71, 0.16);
          background-color: #fff;
          object-fit: auto;
          object-position: center;
          margin-top: 4px;
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #131523;
          font-weight: 700;
          text-align: center;
          line-height: 150%;
          padding: 13px 23px 13px;
        }
        @media (max-width: 991px) {
          .div-25 {
            padding: 0 0px;
          }
        }
        .div-cursor-right {
          aspect-ratio: 1;
          cursor: pointer;
          object-fit: auto;
          object-position: center;
          width: 36px;
          background: none;
          border: none;
          margin-right: 20px;
          color: #1E5EFF;
          font-size: 20px;
        }
        .div-cursor-right:active {
          color: #163B97;
        }
        .div-26 .react-datepicker {
          font-family: Inter, sans-serif;
          align-self: center;
          margin-top: 14px;
        }
        .div-cursor-left {
          aspect-ratio: 1;
          cursor: pointer;
          object-fit: auto;
          object-position: center;
          width: 36px;
          background: none;
          margin-left: 20px;
          border: none;
          color: #5932EA;
          font-size: 20px;
        }
        .div-cursor-left:active {
          color: #4E3C8F;
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
            padding: 0 0px;
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
          background-color: #fff;
          margin-top: 20px;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
          cursor: pointer;
          color: #4925e9;
          padding: 15px 60px;          
          &:hover {
            transition: all 0.2s ease-in-out;
            background: #201564;
            color: #9B9B9B;
          }
        }
        div-29:active {
          background: #201564;
          color: #9B9B9B;
          transform: translateY(8px);
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
            padding: 0 0px;
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
    </div></>
  );
}

export default Input;
