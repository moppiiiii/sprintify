import React from "react";
import UsuallyLayout from "../../layouts/usually/Usually.layout";
import {
  Table,
  Text,
  Group,
  Avatar,
  ScrollArea,
  Container,
} from "@mantine/core";

import classes from "./List.template.module.scss";

const data = [
  {
    id: "1",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
  },
  {
    id: "2",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
  },
  {
    id: "3",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
  },
  {
    id: "4",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
  },
  {
    id: "5",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
  },
  {
    id: "6",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    name: "田中 花子",
    job: "マーケター",
    email: "hanako.tanaka@example.com",
  },
  {
    id: "7",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "佐藤 太郎",
    job: "営業",
    email: "taro.sato@example.com",
  },
  {
    id: "8",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "鈴木 美香",
    job: "デザイナー",
    email: "mika.suzuki@example.com",
  },
  {
    id: "9",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    name: "高橋 健太",
    job: "エンジニア",
    email: "kenta.takahashi@example.com",
  },
  {
    id: "10",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "渡辺 真理",
    job: "プロジェクトマネージャー",
    email: "mari.watanabe@example.com",
  },
  {
    id: "11",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "伊藤 隆",
    job: "アナリスト",
    email: "takashi.ito@example.com",
  },
  {
    id: "12",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "山田 恵子",
    job: "カスタマーサポート",
    email: "keiko.yamada@example.com",
  },
  {
    id: "13",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "中村 大輔",
    job: "セールスマネージャー",
    email: "daisuke.nakamura@example.com",
  },
  {
    id: "14",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    name: "小林 さくら",
    job: "UXリサーチャー",
    email: "sakura.kobayashi@example.com",
  },
  {
    id: "15",
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "加藤 翔太",
    job: "データサイエンティスト",
    email: "shota.kato@example.com",
  },
];

const ListTemplate: React.FC = () => {
  const rows = data.map((item) => {
    return (
      <Table.Tr key={item.id}>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} alt="avatar" radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td>{item.email}</Table.Td>
        <Table.Td>{item.job}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <UsuallyLayout>
      <Container fluid className={classes["list-template-container"]}>
        <ScrollArea type="auto">
          <Table verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>User</Table.Th>
                <Table.Th>title</Table.Th>
                <Table.Th>Job</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </Container>
    </UsuallyLayout>
  );
};

ListTemplate.whyDidYouRender = true;
export default ListTemplate;
