import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  args: {
    links: [
      { label: "Home", url: "#" },
      { label: "Products", url: "#" },
      { label: "Amazing product" },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Single: Story = {
  args: {
    links: [{ label: "Home", url: "#" }],
  },
};

export const Double: Story = {
  args: {
    links: [
      { label: "Home", url: "#" },
      { label: "Products" },
    ],
  },
};
