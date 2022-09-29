import React from "react";
import "./AddBreak.css";

const AddBreak = (props) => {
  // console.log(props);
  const { addBreak } = props;
  console.log(addBreak);
  const breaks = {
    fb: 10,
    sb: 20,
    tb: 30,
    frb: 40,
  };
  return (
    <div className="my-5">
      <h3 className="fw-bold">Playing break:</h3>
      <div className="d-flex justify-content-between shadow-lg p-3 rounded">
        <button
          onClick={() => addBreak(breaks.fb)}
          className="btn btn-primary rounded-pill"
        >
          10m
        </button>
        <button className="btn btn-primary rounded-pill">20m</button>
        <button className="btn btn-primary rounded-pill">30m</button>
        <button className="btn btn-primary rounded-pill">40m</button>
      </div>
    </div>
  );
};

export default AddBreak;
