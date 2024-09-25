import { GetTicketListQuery } from "../../../graphql/generate/generated";

export type ListTemplateProps = Pick<GetTicketListQuery, "ticketList"> & {
  ticketList: Array<
    Pick<
      GetTicketListQuery["ticketList"][number],
      "id" | "title" | "avatar" | "status" | "deadline"
    >
  >;
};
