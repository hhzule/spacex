import React, { FC } from "react";
import { LaunchesQuery } from "../../generated/graphql";
import "./Launch.css";
import LaunchDisplay from "./LaunchDisplay";
interface Props {
  data: LaunchesQuery;
}

const Launch: FC<Props> = ({ data }) => {
  return (
    <div className="launchdiv">
      <h1>Space X Launches</h1>
      {data.launches?.map((launch, i) => {
        return (
          !!launch && (
            <LaunchDisplay
              name={launch.mission_name}
              status={launch.launch_success}
              year={launch.launch_year}
            />
          )
        );
      })}
    </div>
  );
};

export default Launch;
