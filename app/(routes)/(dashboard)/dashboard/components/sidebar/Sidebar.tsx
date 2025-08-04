import LogoDashboard from "../logoDashboard/LogoDashboard";
import SidebarRoutes from "../sidebarRoutes/SidebarRoutes";

export default function Sidebar() {
  return (
    <div className="h-screen bg-[#f9f9f9]">
      <div className="flex flex-col h-full border-r">
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
}
