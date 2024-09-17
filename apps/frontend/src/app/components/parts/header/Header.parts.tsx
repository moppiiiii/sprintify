import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SprintifyLogo from "../../../../assets/logo/sprintify-logo.webp";
import classes from "./Header.parts.module.scss";

const links = [
  { link: "/list", label: "List" },
  { link: "/board", label: "Board" },
  { link: "/sprint", label: "Sprint" },
  { link: "/retrospective", label: "Retrospective" },
];

const HeaderComponent: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes["header-link"]}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes["header-container"]}>
      <Container fluid className={classes["inner-container"]}>
        <img
          className={classes["logo-image"]}
          src={SprintifyLogo}
          alt="sprintify-logo"
        />
        <Group gap={10} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

HeaderComponent.whyDidYouRender = true;
export default HeaderComponent;
