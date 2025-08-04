import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { href, label, icon: Icon } = item;

  const pathname = usePathname();
  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-[#eac76b] hover:text-black p-2 rounded-lg cursor-pointer`,
        activePath && `bg-[#eac76b]`
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1} />
      {label}
    </Link>
  );
}
