import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonSwitch } from "./ButtonSwitch";


const meta: Meta<typeof ButtonSwitch> = {
  title: "Pyxis/ButtonSwitch",
  component: ButtonSwitch,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ButtonSwitch>;

export const Default: Story = {
  args: {
    checked: true,
  },
};
