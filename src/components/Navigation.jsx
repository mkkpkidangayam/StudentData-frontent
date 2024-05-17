import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <h3>
          <Link to={"/"}>Add Student Data</Link>
        </h3>
        <h3>
          <Link to={"/students-data-table"}>Show students Data</Link>
        </h3>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
