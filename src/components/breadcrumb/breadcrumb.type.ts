export type BreadcrumbLink = {
  label: string;
  url?: string;
};

export type BreadcrumbProps = {
  links: BreadcrumbLink[];
};
