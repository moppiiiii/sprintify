import React from "react";
import ListTemplate from "../../components/templates/list/List.template";
import { useGetTicketListQuery } from "../../graphql/generate/generated";

const ListPage: React.FC = () => {
  const { data } = useGetTicketListQuery();

  return <ListTemplate ticketList={data?.ticketList ?? []} />;
};

ListPage.whyDidYouRender = true;
export default ListPage;
