import React from "react";
import "./AddBreak.css";

const AddBreak = () => {
  return (
    <div className="my-5">
      <h3 className="fw-bold">Add a break:</h3>
      <div className="d-flex justify-content-between shadow-lg p-3 rounded">
        <button className="btn btn-primary rounded-pill">10</button>
        <button className="btn btn-primary rounded-pill">10</button>
        <button className="btn btn-primary rounded-pill">10</button>
        <button className="btn btn-primary rounded-pill">10</button>
      </div>
    </div>
  );
};

export default AddBreak;
