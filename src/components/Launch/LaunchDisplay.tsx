import React from "react";

const LaunchDisplay = ({ name, year, status }: any) => {
  return (
    <div>
      <div className={status ? "red" : "green"}>
        <div className="wrapper">
          <p>
            {" "}
            {name}
            <span></span>
            {year}
          </p>
          <div className="learn">
            {status ? <p>Success</p> : <p>Failure</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDisplay;
