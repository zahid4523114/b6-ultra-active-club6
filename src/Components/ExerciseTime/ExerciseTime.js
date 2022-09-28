import React from "react";
import "./ExerciseTime.css";

const ExerciseTime = (props) => {
  let { time } = props.eachItem;
  let defaultTime = 0;
  let newTime = defaultTime + time;
  return (
    <div className="my-4">
      <div className="p-3 rounded shadow-lg mb-4">
        <h4>Exercise time :{time}min</h4>
      </div>
    </div>
  );
};

export default ExerciseTime;
