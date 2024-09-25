import { Resolver, Query } from "@nestjs/graphql";
import { TicketList } from "../../models/ticket/ticket.model";
import { TICKET_LIST_MOCK_DATA } from "./mock-data/data.mock";

@Resolver("TicketList")
export class TicketListResolver {
  @Query(() => [TicketList])
  async ticketList(): Promise<TicketList[]> {
    return TICKET_LIST_MOCK_DATA;
  }
}
