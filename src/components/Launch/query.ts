import gql from "graphql-tag";

export const QUERY_LAUNCH = gql`
  query launches {
    launches {
      mission_name
      details
      launch_year
      launch_success
    }
  }
`;
