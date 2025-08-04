"use client";

import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import SidebarItem from "../sidebarItem/SidebarItem";
import { isAdministrator } from "@/lib/isAdmin";

export default function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6 border-b">
          <p className="mb-4 uppercase">General</p>
          {dataGeneralSidebar.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>

        {isAdministrator(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-4 uppercase">Admin</p>
            {dataAdminSidebar.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
