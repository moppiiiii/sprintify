import { gql } from "@apollo/client";

export const TICKET_LIST = gql`
  query GetTicketList {
    ticketList {
      id
      title
      avatar
      status
      deadline
    }
  }
`;
