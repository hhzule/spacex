import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import LaunchInfo from "./LaunchInfo";
import "./LaunchInfo.css";

const LaunchInfoContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return <div>Behold !!!</div>;
  }

  if (error) {
    return <div>Oh NOO !!!</div>;
  }

  if (!data) {
    return <div>Click to know more</div>;
  }
  return (
    <div>
      <LaunchInfo data={data} />
    </div>
  );
};

export default LaunchInfoContainer;
