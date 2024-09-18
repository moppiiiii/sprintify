import {
  IconList,
  IconLayoutKanban,
  IconRun,
  IconArrowBackUpDouble,
  IconLogout2,
} from "@tabler/icons-react";

export const PRINCIPAL_NAV_DATA = [
  { link: "/list", label: "List", icon: IconList },
  { link: "/board", label: "Board", icon: IconLayoutKanban },
  { link: "/sprint", label: "Sprint", icon: IconRun },
  {
    link: "/retrospective",
    label: "Retrospective",
    icon: IconArrowBackUpDouble,
  },
] as const;

export const LOGOUT_NAV_DATA = {
  link: "/logout",
  label: "Logout",
  icon: IconLogout2,
} as const;
