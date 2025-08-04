import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SidebarRoutes from "../sidebarRoutes/SidebarRoutes";
import { UserButton } from "@clerk/nextjs";

export default function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 ">
      {/* Izquierda: Menú o Título */}
      <div className="flex items-center">
        {/* Menú hamburguesa (solo visible en pantallas pequeñas) */}
        <div className="block xl:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center">
              <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <SidebarRoutes />
            </SheetContent>
          </Sheet>
        </div>

        {/* Título (solo visible en pantallas grandes) */}
        <div className="hidden xl:block text-3xl font-semibold">
          List of Cars
        </div>
      </div>

      {/* Derecha: Botón de usuario */}
      <div className="flex items-center gap-x-2">
        <UserButton />
      </div>
    </nav>
  );
}
