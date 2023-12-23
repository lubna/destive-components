import type { Meta, StoryObj } from "@storybook/react";

import { Tags } from "./tags";

const meta = {
  title: "Components/Tags",
  component: Tags,
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tags: [
      { label: "Blog" },
      { label: "News" },
      { label: "Misc" },
      { label: "Recent" },
    ],
  },
};

export const Outlined: Story = {
  args: {
    tags: [
      { label: "Blog", outlined: true },
      { label: "News", outlined: true },
      { label: "Misc", outlined: true },
      { label: "Recent", outlined: true },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    tags: [
      { label: "Blog" },
      { label: "News", outlined: true },
      { label: "Misc", icon: "gift" },
      { label: "Recent", outlined: true, icon: "candy-cane" },
    ],
  },
};

export const Mixed: Story = {
  args: {
    tags: [
      { label: "Blog", theme: "primary" },
      { label: "News", outlined: true },
      { label: "Misc", icon: "gift", theme: "secondary" },
      { label: "Recent", outlined: true, icon: "candy-cane", theme: "primary" },
    ],
  },
};
