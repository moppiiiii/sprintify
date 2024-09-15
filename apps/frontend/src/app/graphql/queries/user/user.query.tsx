import { gql } from "@apollo/client";

export const USER = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;
