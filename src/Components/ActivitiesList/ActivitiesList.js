import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import logo from "../../owner.png";
import "./ActivitiesList.css";
import AddBreak from "../AddBreak/AddBreak";
import ExerciseTime from "../ExerciseTime/ExerciseTime";
import BreakTime from "../BreakTime/BreakTime";
import fakedb, { addToDb } from "../../utilities/fakedb";

const ActivitiesList = () => {
  let [activity, setActivity] = useState([]);
  useEffect(() => {
    fetch("activities.json")
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);
  //exercise time
  const [favorite, setFavorite] = useState([]);
  const addGame = (game) => {
    const newGame = [...favorite, game];
    setFavorite(newGame);
  };
  //break time
  const [breaks, setBreaks] = useState([]);
  const addBreak = (breakTime) => {
    setBreaks(breakTime);
  };

  return (
    <div className="">
      <div className="my-3 ms-4">
        <h1>
          <i class="fa-solid fa-chart-line text-primary"></i> Summer activities
        </h1>
      </div>
      <div className="row container-fluid  flex-lg-row flex-md-column-reverse flex-column-reverse">
        <div className="activities-container col-9 row">
          {activity.map((act) => (
            <Activity addGame={addGame} key={act.id} activity={act}></Activity>
          ))}
        </div>
        <div className="sidebar-container bg-body shadow-lg p-3 rounded col-3 ms-md-3 mb-md-3">
          <div className="bg-body">
            <img className="w-25 mb-2" src={logo} alt="" />
            <h5 className="fw-bold">Dewan Mohammod Zahid</h5>
            <p>
              <i class="fa-solid fa-location-dot"></i> Dhaka,Bangladesh
            </p>
          </div>
          <div className="d-flex justify-content-evenly align-items-center p-2 bg-body rounded shadow-lg">
            <p className="fw-bold">60kg</p>
            <p className="fw-bold">5.10 inch</p>
            <p className="fw-bold">22 yrs</p>
          </div>
          <AddBreak addBreak={addBreak}></AddBreak>
          <ExerciseTime Items={favorite}></ExerciseTime>
          <BreakTime breakTime={breaks}></BreakTime>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesList;
