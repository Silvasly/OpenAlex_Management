import React, { useEffect, useState } from "react";
import axios from 'axios';

function Manage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.openalex.org/works')
      .then(response => {
        const dataArray = response.data.results.map(item => ({
          author: item.authorships[0]?.author?.display_name || 'N/A',
          country: item.authorships[0]?.countries?.[0] || 'N/A',
          year: item.publication_year,
          title: item.title,
          status: item.open_access.is_oa ? 'Active' : 'Inactive'
        }));

        if (Array.isArray(dataArray)) {
          setData(dataArray);
        } else {
          console.error('Data is not an array:', dataArray);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="box">
      <div className="div-1">
        <div className="container">
        <div className="header">
          <h1>Hello John Deo 👋</h1>
        </div>
        <div className="sub-header">
          <h2>OpenAlex</h2>
          <button className="input-button">+ Upload</button>
        </div>
        
        <div className="table">
          <div className="row header-row">
            <div className="cell-A">Author</div>
            <div className="cell-A">Year</div>
            <div className="cell-A">Title</div>
            <div className="cell-A">Country</div>
            <div className="cell-A">Status</div>
          </div>
          {data.map((item, index) => (
            <div key={index} className={`row ${item.status ? item.status.toLowerCase() : ''}`}>
              <div className="cell">{item.author}</div>
              <div className="cell-A">{item.year}</div>
              <div className="cell">{item.title}</div>
              <div className="cell-A" >{item.country}</div>
              <div className="cell-A">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="div">
        <div className="div-2">© Copyright 2024. All rights reserved.</div>
        <div className="div-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce83b6b23902108e0881ee5031345f8a7798edda70f92647ac7d878dc6a9477?"
            className="img"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/da38311641731fe0df66a32f45c2a961565f45fe9eb7f90cd1c19eed21645bf6?"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c999a8e93f14f3d920ecfda0d0c27501fa4ef27c5faea2c59ce60679221eda?"
            className="img-3"
          />
        </div>
      </div>
      </div>
      {/* Updated styles */}
      <style jsx>{`
        .box {
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
        .div-1 {
          border-radius: 30px;
          display: flex;
          margin-top: 18px;
          width: 100%;
          max-width: 1157px;
          flex-direction: column;
          padding: 29px 24px 15px;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .div {
          justify-content: space-between;
          display: flex;
          margin-top: 39px;
          width: 100%;
          max-width: 1280px;
          gap: 20px;
          padding: 0 0px;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-2 {
          color: #5f7896;
          flex-grow: 1;
          flex-basis: auto;
          font: 500 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-3 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: auto 0;
        }
        .img {
          aspect-ratio: 0.95;
          object-fit: auto;
          object-position: center;
          width: 19px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .container {
          max-width: 800px;
          margin: auto;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0,0,0,.1);
          padding: 20px; 
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #5932ea;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          color: white;
        }

        .sub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        h1, h2 {
          font-size: 24px;
        }

        .input-button {
          background-color: white;
          color: #5932ea;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          transition-duration: 0.4s;
          &:hover {
            transition: all 0.2s ease-in-out;
            background: #201564;
            color: #9B9B9B;
        }
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          background-color: #fff;
          padding: 10px;
          border-bottom: 1px solid #eee;
        }

        .header-row {
          background-color: #f5f5f5;
        }

        .cell {
          flex: 1;
          text-align: justify-all;
        }
        .cell-A{
          flex: 1;
          text-align: center;
        }

        .ongoing {
          color: #008767;
        }

        .inactive {
          color: #df0404;
        }
      `}</style>
    </div>
  );
}

export default Manage;
