import Navbar from "@/components/Shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl mt-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl"> Thank you for trusting us!</h1>

          <div className="flex gap-4 mt-5">
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>

            <Link href="/cars">
              <Button className="bg-black text-[#D4AF37] hover:bg-[#2a2a2af4]">
                Return to Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
