import React from "react";
import "./Activity.css";

const Activity = (props) => {
  const { activity, addGame } = props;
  const { strDes, strName, img, time } = activity;
  return (
    <div style={{ width: "18rem" }} className=" mt-md-4 mt-4">
      <div className="bg-body rounded shadow-lg p-3 mb-3">
        <img className=" w-100 rounded mb-2" src={img} alt="" />
        <h4 className="">{strName}</h4>
        <p>{strDes.slice(0, 100)}</p>
        <h5>
          <b>Time:</b> {time} minutes
        </h5>
        <button
          onClick={() => addGame(activity)}
          className="btn btn-primary d-block text-center container-fluid"
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Activity;
