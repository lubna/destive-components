import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: {
    size: "large",
    fill: "primary",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bauble: Story = {
  args: {
    asset: "bauble",
  },
};

export const Bell: Story = {
  args: {
    asset: "bell",
  },
};

export const CandyCane: Story = {
  args: {
    asset: "candy-cane",
  },
};

export const Gift: Story = {
  args: {
    asset: "gift",
  },
};

export const Santa: Story = {
  args: {
    asset: "santa",
  },
};

export const Snowflake: Story = {
  args: {
    asset: "snowflake",
  },
};

export const Star: Story = {
  args: {
    asset: "star",
  },
};

export const Tree: Story = {
  args: {
    asset: "tree",
  },
};
