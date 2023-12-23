import type { Meta, StoryObj } from "@storybook/react";

import { GiftImage } from "./gift-image";
import portraitImg from "../../static/img.jpg";
import squareImg from "../../static/img2.jpg";
import landscapeImg from "../../static/img3.jpg";

const meta = {
  title: "Components/Gift Image",
  component: GiftImage,
} satisfies Meta<typeof GiftImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {
  args: {
    src: squareImg.src,
    width: "400px",
  },
};

export const Portrait: Story = {
  args: {
    src: portraitImg.src,
    width: "300px",
  },
};

export const Landscape: Story = {
  args: {
    src: landscapeImg.src,
  },
};
