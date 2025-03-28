import type { ElementType } from "react";

export type NavItem = {
  id: number;
  label: string;
  link?: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      link: string;
      description: string;
      icon: ElementType;
    }[];
  }[];
};
