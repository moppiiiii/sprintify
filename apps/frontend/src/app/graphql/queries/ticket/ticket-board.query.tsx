import { gql } from "@apollo/client";

export const TICKET_Board = gql`
  query GetTicketBoard {
    ticketBoard {
      id
      title
      avatar
      status
      deadline
    }
  }
`;
