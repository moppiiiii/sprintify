import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";
import { Table, Text, Avatar, ScrollArea, Container, Box } from "@mantine/core";

import classes from "./List.template.module.scss";
import { ListTemplateProps } from "./type";

const ListTemplate: React.FC<ListTemplateProps> = ({ ticketList }) => {
  const rows = ticketList.map((item) => {
    return (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Avatar size={26} src={item.avatar} alt="avatar" radius={26} />
        </Table.Td>
        <Table.Td>
          <Text>{item.title}</Text>
        </Table.Td>
        <Table.Td>
          <Text>{item.status}</Text>
        </Table.Td>
        <Table.Td>
          <Text>{item.deadline}</Text>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <UsuallyLayout>
      <Container fluid className={classes["list-template-container"]}>
        <ScrollArea type="auto">
          <Box className={classes["table-wrapper"]}>
            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    <Text>assignee</Text>
                  </Table.Th>
                  <Table.Th>
                    <Text>title</Text>
                  </Table.Th>
                  <Table.Th>
                    <Text>status</Text>
                  </Table.Th>
                  <Table.Th>
                    <Text>deadline</Text>
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Box>
        </ScrollArea>
      </Container>
    </UsuallyLayout>
  );
};

ListTemplate.whyDidYouRender = true;
export default ListTemplate;
