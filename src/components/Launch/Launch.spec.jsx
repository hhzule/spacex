import React from "react";
import { shallow, render } from "enzyme";
import LaunchDisplay from "./LaunchDisplay";
// import { LaunchesQuery } from "../../generated/graphql";
// import { useLaunchesQuery } from "../../generated/graphql";
// import { MockedProvider } from "@apollo/client/testing";

// const mocks = [
//   {
//     request: {
//       query: useLaunchesQuery,
//     },
//     result: {
//       data: {
//         launches: {
//           mission_name: "first",
//           details: "starlink launch",
//           launch_year: 2020,
//           launch_success: true,
//         },
//       },
//     },
//   },
// ];

// const mock = {
//   launches: {
//     mission_name: "first",
//     details: "starlink launch",
//     launch_year: 2020,
//     launch_success: true,
//   },
// };

// const component = render(
//   <MockedProvider mocks={mocks} addTypename={false}>
//     <Launch />
//   </MockedProvider>
// );
// test("renders the main div", () => {
//   console.log(component, " componenet");
//   expect(component).toBeTruthy();
// });

const component = shallow(
  <LaunchDisplay name={"star"} status={true} year={2020} />
);
test("renders the main div", () => {
  expect(component).toMatchSnapshot();
});
