import React from "react";
import Navbar from "./Navbar";
import "../sass/App.css";
import { GoGraph } from "react-icons/go";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h3 className="text-center dash">Overview</h3>
        <div className="box">
          <div className="box1">
            $682.5&nbsp;&nbsp;
            <GoGraph className="text-warning" />
          </div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
