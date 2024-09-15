import type { Meta, StoryObj } from "@storybook/react";

import HeaderComponent from "./Header.parts";

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Primary: Story = {};
