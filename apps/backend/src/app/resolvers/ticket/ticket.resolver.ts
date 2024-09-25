import { Resolver, Query } from "@nestjs/graphql";
import { TicketBoard, TicketList } from "../../models/ticket/ticket.model";
import { TICKET_MOCK_DATA } from "./mock-data/data.mock";

@Resolver("TicketList")
export class TicketListResolver {
  @Query(() => [TicketList])
  async ticketList(): Promise<TicketList[]> {
    return TICKET_MOCK_DATA;
  }
}

@Resolver("TicketBoard")
export class TicketBoardResolver {
  @Query(() => [TicketBoard])
  async ticketBoard(): Promise<TicketBoard[]> {
    return TICKET_MOCK_DATA;
  }
}
