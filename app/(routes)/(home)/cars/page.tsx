import Navbar from "@/components/Shared/Navbar/Navbar";
import { db } from "@/lib/db";
import HeaderCars from "./components/HeaderCars";
import FiltersAndListCars from "./components/FiltersAndListCars/FiltersAndListCars";
import Image from "next/image";

export default async function PageCars() {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars />
        <div>
          <FiltersAndListCars cars={cars} />
        </div>
      </div>

      <footer className="bg-black dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 py-10 px-6 mt-30">
        <div className="max-w-6xl mx-auto flex justify-center gap-30 items-start">
          <div>
            <h2 className="text-xl font-semibold text-[#CBD5E1] dark:text-white text-center flex items-center gap-2">
              <Image
                priority={true}
                src="/logo_vc_dark.ico"
                alt="VegaCars"
                width={50}
                height={50}
              />
              VegaCars
            </h2>
            <p className="text-md mt-2 text-white">
              Premium car rental service
            </p>
          </div>
        </div>

        <div className="text-xs text-center mt-10 text-neutral-400">
          © 2025 VegaCars. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
