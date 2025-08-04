"use client";

import Navbar from "@/components/Shared/Navbar/Navbar";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import SliderBrands from "./components/SliderBrands/SliderBrands";
import Features from "./components/Features/Features";
import OurFleet from "./components/OurFleet/OurFleet";
import DriveToday from "./components/DriveToday/DriveToday";
import { useAuth } from "@clerk/nextjs";
import Register from "./components/Register/Register";

export default function Home() {
  const { userId } = useAuth();

  return (
    <>
      <Navbar />
      <FirstBlock />
      <SliderBrands />
      <Features />
      <OurFleet />
      {userId ? (
        <div>
          <DriveToday />
        </div>
      ) : (
        <div>
          <Register />
        </div>
      )}

      {/* <h1 className="text-7xl uppercase text-[#eac76b] font-medium">
        Premium <br /> Car Rental
      </h1>
      <button className="bg-[#eac76b] text-black uppercase cursor-pointer px-15 py-2 rounded-sm shadow-md font-medium hover:bg-[#e6b93d] transition-colors duration-100 tracking-wider text-lg">
        Search
      </button> */}
    </>
  );
}
