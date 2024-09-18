import React from "react";
import { Container, Group, Text, Image } from "@mantine/core";
import { IconBell, IconSettings } from "@tabler/icons-react";
import SprintifyLogo from "../../../../assets/logo/sprintify-logo.webp";
import classes from "./Header.parts.module.scss";

const HeaderComponent: React.FC = () => {
  return (
    <header className={classes["header-container"]}>
      <Container fluid className={classes["inner-container"]}>
        <Group className={classes["info-group"]}>
          <Image
            className={classes["logo-image"]}
            src={SprintifyLogo}
            alt="sprintify-logo"
          />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "green", to: "blue", deg: 180 }}
          >
            Sprintify
          </Text>
        </Group>
        <Group>
          <IconBell />
          <IconSettings />
        </Group>
      </Container>
    </header>
  );
};

HeaderComponent.whyDidYouRender = true;
export default HeaderComponent;
