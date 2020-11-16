import React from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./LaunchInfo.css";
import c from "./images/c.webp";

interface Props {
  data: LaunchesQuery;
}

const LaunchInfo: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <div> Launch N/A</div>;
  }
  console.log(data.launches);
  return (
    <div className="launchinfo">
      <h1>Flights 2020</h1>

      {data.launches?.map((item, i) => {
        if (item && item.launch_year === 2020)
          return (
            <div key={i} className="info">
              <h1>{item?.mission_name}</h1>

              <img src={c} alt="space" />

              <p>{item?.details}</p>
            </div>
          );
        return null;
      })}
    </div>
  );
};

export default LaunchInfo;
