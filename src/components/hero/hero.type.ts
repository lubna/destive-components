export type HeroProps = {
  title: string;
  backgroundImage: string;
  textTheme: "light" | "dark";
  text?: string;
  cta?: {
    label: string;
    url: string;
  };
  textPosition?: "center" | "left" | "right";
  darkOverlay?: boolean;
};
