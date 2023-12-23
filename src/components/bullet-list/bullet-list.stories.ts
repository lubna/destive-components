import type { Meta, StoryObj } from "@storybook/react";

import { BulletList } from "./bullet-list";

const meta = {
  title: "Components/Bullet List",
  component: BulletList,
  args: {
    items: ["Lights", "Tinsel", "Baubles", "Ribbon"],
  },
} satisfies Meta<typeof BulletList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    markerFill: "accent",
  },
};

export const IconMarker: Story = {
  args: {
    marker: "candy-cane",
    markerFill: "secondary",
  },
};
