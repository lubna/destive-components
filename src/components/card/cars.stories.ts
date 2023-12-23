import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";
import heroRight from "../../static/hero-2.jpg";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Best decorations for this festive season",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros lacus, tincidunt ut venenatis eu, auctor nec nunc. Fusce tristique, nunc id finibus feugiat, nulla eros convallis ligula.",
    icon: "bauble",
  },
};
