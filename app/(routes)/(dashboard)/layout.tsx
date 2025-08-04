import Navbar from "./dashboard/components/navbarDashboard/NavbarDashboard";
import Sidebar from "./dashboard/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        <Sidebar />
      </div>
      <div className="w-full h-full xl:ml-80">
        <Navbar />
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
