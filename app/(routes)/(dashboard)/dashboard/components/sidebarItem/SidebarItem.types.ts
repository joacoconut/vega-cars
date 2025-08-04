import { LucideIcon } from "lucide-react";

export type SidebarItemProps = {
  item: {
    icon: LucideIcon;
    href: string;
    label: string;
  };
  key: number;
};
