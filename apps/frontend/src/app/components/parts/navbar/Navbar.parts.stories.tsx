import type { Meta, StoryObj } from "@storybook/react";

import NavbarComponent from "./Navbar.parts";

const meta: Meta<typeof NavbarComponent> = {
  component: NavbarComponent,
};

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const Primary: Story = {};
