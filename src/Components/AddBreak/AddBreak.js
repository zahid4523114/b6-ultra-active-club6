import React from "react";
import "./AddBreak.css";

const AddBreak = (props) => {
  const { addBreak } = props;
  const breaks = {
    fb: "10min",
    sb: "20min",
    tb: "30min",
    frb: "40min",
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
        <button
          onClick={() => addBreak(breaks.sb)}
          className="btn btn-primary rounded-pill"
        >
          20m
        </button>
        <button
          onClick={() => addBreak(breaks.tb)}
          className="btn btn-primary rounded-pill"
        >
          30m
        </button>
        <button
          onClick={() => addBreak(breaks.frb)}
          className="btn btn-primary rounded-pill"
        >
          40m
        </button>
      </div>
    </div>
  );
};

export default AddBreak;
