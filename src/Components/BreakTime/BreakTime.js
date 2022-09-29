import React from "react";
import "./BreakTime.css";

const BreakTime = (props) => {
  return (
    <div className="">
      <div className="p-3 rounded shadow-lg">
        <h4>
          Playing Break : <b>{props.breakTime}</b>
        </h4>
      </div>
    </div>
  );
};

export default BreakTime;
