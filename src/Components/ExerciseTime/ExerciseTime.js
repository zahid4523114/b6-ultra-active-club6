import React from "react";
import "./ExerciseTime.css";

const ExerciseTime = (props) => {
  const exerciseItems = props.Items;
  console.log(exerciseItems);

  let defaultTime = 0;
  for (const exercise of exerciseItems) {
    let newTime = exercise.time;
    defaultTime = defaultTime + newTime;
  }
  return (
    <div>
      <h3 className="fw-bold">Exercise Details</h3>
      <div className="p-3 rounded shadow-lg my-4">
        <h4>
          Exercise time : <span>{defaultTime}</span>min
        </h4>
      </div>
    </div>
  );
};

export default ExerciseTime;
