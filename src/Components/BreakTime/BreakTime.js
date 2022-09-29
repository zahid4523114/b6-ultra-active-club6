import React from "react";
import "./BreakTime.css";

const BreakTime = (props) => {
  console.log(props);
  return (
    <div className="">
      <div className="p-3 rounded shadow-lg">
        <h4>
          Playing Break : <b>{props.breakTime}</b>min
        </h4>
      </div>
    </div>
  );
};

export default BreakTime;
