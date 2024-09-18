import { useState } from "react";
import { Group, Text } from "@mantine/core";
import {
  IconList,
  IconLayoutKanban,
  IconRun,
  IconArrowBackUpDouble,
  IconLogout2,
} from "@tabler/icons-react";

import classes from "./Navbar.parts.module.scss";

const data = [
  { link: "/list", label: "List", icon: IconList },
  { link: "/board", label: "Board", icon: IconLayoutKanban },
  { link: "/sprint", label: "Sprint", icon: IconRun },
  {
    link: "/retrospective",
    label: "Retrospective",
    icon: IconArrowBackUpDouble,
  },
];

const NavbarComponent: React.FC = () => {
  const [active, setActive] = useState("List");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes["link-icon"]} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes["navbar-container"]}>
      <div className={classes["navbar-header-wrapper"]}>
        <Group className={classes["navbar-header"]} justify="space-between">
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "green", to: "blue", deg: 178 }}
          >
            Sprintify
          </Text>
        </Group>
        {links}
      </div>

      <div className={classes["navbar-footer-wrapper"]}>
        <a
          href="/logout"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout2 className={classes["link-icon"]} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default NavbarComponent;
