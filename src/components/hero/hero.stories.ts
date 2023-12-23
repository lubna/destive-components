import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "./hero";
import heroCenter from "../../static/hero-3.jpg";
import heroRight from "../../static/hero-4.jpg";
import heroLeft from "../../static/hero-2.jpg";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Merry Christmas!",
    text: "And Happy New Year",
    cta: {
      label: "Click here",
      url: "#",
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    textTheme: "light",
    textPosition: "center",
    backgroundImage: heroCenter.src,
    darkOverlay: true,
  },
};

export const Left: Story = {
  args: {
    textTheme: "light",
    textPosition: "left",
    backgroundImage: heroLeft.src,
  },
};

export const Right: Story = {
  args: {
    textTheme: "dark",
    backgroundImage: heroRight.src,
    textPosition: "right",
  },
};
